from hashlib import md5

from app.database import db
from app.models import User

# create an admin user in the database (will also serve as test user) 
def create_admin():

    # check if the admin user already exists in the database
    user = User.query.filter_by(email="admin@site.net").first()

    if user is None:
        # create the admin user if it does not exit in the db
        user = User(
            username="admin",
            password=md5("password".encode()).hexdigest(),
            email="admin@site.net",
            is_admin=True
        )

        # add the user to the database session and commit changes
        db.session.add(user)
        db.session.commit()
        print("super user admin set successfully")

    else:
        print("super user admin already exists")


