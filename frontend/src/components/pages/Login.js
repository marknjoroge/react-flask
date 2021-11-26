import React, { Component, useState, useEffect } from 'react';
import './Login.css';

function Login() {

	const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
			username: "form.",
			email: "email",
			password: "password"
		})
    };

	const loginToAcc = () => {
		useEffect(() => {
			fetch('/api/login', requestOptions)
				.then(response =>
					response.json())
				.then(data => {
					alert(data)
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
				<div>
					<label htmlFor="password">Password</label>
					<input id="password" type="text" className="form-control" />
				</div>
				<button onClick={loginToAcc()} className="btn btn-primary"> Login </button>
			</form>
		</div>
	);
}

export default Login;