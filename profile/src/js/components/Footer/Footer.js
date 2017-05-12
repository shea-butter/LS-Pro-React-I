import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
	render () {
		return (
			<div className="footer">
				<ul>
					<li><a href="https://github.com/shea-butter" rel="noopener noreferrer" target="_blank"><i className="fa fa-2x fa-github" /></a></li>
				</ul>
				<p>© 2017 Shea Fitzek - All Rights Reserved</p>
			</div>
		);
	}
}
