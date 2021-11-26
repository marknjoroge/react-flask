import React, { Component, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Cookies from 'universal-cookie';

import './SignUp.css';

function SignUp() {

    const history = useHistory();
	
	const uname = ""
	const pwd = ""
	const email = ""

	const cookies = new Cookies();

	const registerUser = () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				
				username: "form.",
				email: "email",
				password: "password"
			})
		};

		useEffect(() => {
			fetch('/api/register', requestOptions)
				.then(response =>
					response.json())
				.then(data => {
					if(data.access_token != null){
						cookies.set('jwt_token', data.access_token)
						history.push("/");
					}
						
				})
		}, [])
	};

	return (
		<div className="form-container">
			<h1>Login</h1>
			<form>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input id="username" type="text" className="form-control" />
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input id="email" type="text" className="form-control" />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input id="password" type="text" className="form-control" />
				</div>
				<button onClick={registerUser()} className="btn btn-primary"> Submit </button>
			</form>
		</div>
	);

}

export default SignUp;