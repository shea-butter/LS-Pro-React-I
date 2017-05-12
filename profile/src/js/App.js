import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import NavBar from './components/NavBar/NavBar.js';
import Body from './components/Body/Body.js';
import Footer from './components/Footer/Footer.js';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header title={'Playing with React'} />
				<NavBar title={'Navbar'} />
				<Body />
				<Footer />
			</div>
		);
	}
}

export default App;
