from flask import Flask, request, render_template, jsonify
from flask_restful import Api, Resource

from hashlib import md5
import os
import requests
import jwt
import datetime

# imports from the app folder
from app.config import app
from app.models import User, AuthToken, BlackList
from app.database import db


# create the api interface for the app
api = Api(app)

class ProfileEndpoint(Resource):
    def get(self):
        sent_token = request.headers.get("Authorization").split(" ")[1]
        
        # check if the token is black-listed
        black_token = BlackList.query.filter_by(token=sent_token).first()
        if black_token:
            db.session.delete(black_token)
            return "token expired,,,please login in again"
        
        # check is user is using valid token
        valid_token = AuthToken.query.filter_by(token=f"{sent_token}").first()
        if valid_token:
            # check if the token is expired
            if datetime.datetime.utcnow() > valid_token.expiry:
                # delete and blacklist token
                blacklist = BlackList()
                blacklist.token = valid_token.token
                db.session.delete(valid_token)
                db.session.commit()
                return "token expired,,,please login in again"
            else:
                # send the user profile
                user = User.query.filter_by(user_id=valid_token.user_id).first()
                return jsonify({"username": user.username, "email": user.email, "isAdmin": user.is_admin})
        else:
            return "invalid authentication token"

    def post(self):
        return "allowed methods: [GET]"


class LoginEndpoint(Resource):
    def get(self):
        return "allowed methods: [POST]"

    def post(self):
        try:
            # Get user email and password from the request object 
            email = request.json.get("email").strip()
            password = md5((request.json.get("password").strip()).encode()).hexdigest()

        except Exception as e:
            print(str(e))

            return "user credentials not found"

        # attempt retrieving the user if it is exists.
        user = User.query.filter_by(email=email, password=password).first()
        if user is not None:
            jwt_token = generate_jwt_token({"user_id": user.user_id})

            # add the token to the database
            new_token = AuthToken()
            new_token.user_id = user.user_id
            new_token.token = jwt_token
            new_token.expiry = datetime.datetime.utcnow() +datetime.timedelta(minutes=30) # change the minutes to a desirable duration
            db.session.add(new_token)
            db.session.commit()

            return create_auth_response(jwt_token, 200)
        else:
            return "invalid login credentials"


class RegisterEndpoint(Resource):
    def get(self):
        return "allowed methods: [POST]"

    def post(self):
        try:
            # Get user email and password from the request object 
            username = request.json.get("username").strip()
            email = request.json.get("email").strip()
            password = request.json.get("password").strip()

        except Exception as e:
            print(str(e))

            return "failed to retrieve credentials"

        # create a user object to register to the system
        new_user = User()
        new_user.username = username
        new_user.email = email
        new_user.password = md5(password.encode()).hexdigest()

        # attempt to add the user to the database
        db.session.add(new_user)
        db.session.commit()

        jwt_token = generate_jwt_token({"user_id": new_user.user_id})
    
        return create_auth_response(jwt_token, 201)


# expose the endpoints of the api using uri
api.add_resource(ProfileEndpoint, "/api/profile")
api.add_resource(LoginEndpoint, "/api/login")
api.add_resource(RegisterEndpoint, "/api/register")


def generate_jwt_token(payload):
    encoded = jwt.encode(payload, app.config.get("SECRET_KEY"), algorithm='HS256')
    token = encoded
    return token

def create_auth_response(token, status_code):
    response = jsonify(
        access_token = token,
        token_type = "bearer"
    )
    response.status_code = status_code
    return response


if __name__ == "__main__":
    app.run(port=5050, debug=True)

