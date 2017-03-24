import React, { Component } from 'react';
import '../../styles/css/vendors/font-awesome.min.css';
import '../../styles/css/components/Body.css';
import profilePic from '../../img/me_cropped.png';

export default class Body extends Component {
	render () {
		return (
			<div className="body">
				<img className="profilePic" src={profilePic} alt="Shea Fitzek" />
				<h2>I'm Shea Fitzek</h2>
				<p>
					Father...Husband<br />
					Working mech engineer<br />
					Aspiring full-stack developer<br />
				</p>
				<h3>Check out my Github <a href="https://github.com/shea-butter" rel="noopener noreferrer" target="_blank"><i className="fa fa-2x fa-github" /></a></h3>
			</div>
		);
	}
}
