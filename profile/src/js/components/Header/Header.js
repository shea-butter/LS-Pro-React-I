import React from 'react'; // use this method for dumb/static components where 'state' is not needed
import './Header.css';

export default function (props) { // use the function export method for dumb/static components where 'state' is not needed
	return (
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	);
}
