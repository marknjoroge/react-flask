import React, { useState, useEffect } from 'react';
import Navbar from './components/NavBar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Test from './components/pages/Testform'



function App() {

	// useEffect(() => {
	// 	fetch('/movies').then(response =>
	// 		response.json().then(data => {
	// 			console.log(data);
	// 		}))
	// }, [])

	return (

		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/services' component={Services} />
					<Route path='/products' component={products} />
					<Route path='/sign-up' component={SignUp}/>
					<Route path='/test' component={Test}/>
				</Switch>
			</Router>
		</div>


	);
}

export default App;


