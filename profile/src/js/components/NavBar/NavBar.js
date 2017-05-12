import React from 'react';
import './NavBar.css';

export default function (props) { // use the function export method for dumb/static components where 'state' is not needed
		return (
			<div className="navbar">
				<h1>{props.title}</h1>
			</div>
		);
}
