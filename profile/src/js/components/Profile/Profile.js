import React, { Component } from 'react';
import '../../../styles/css/vendors/font-awesome.min.css';
import './Profile.css';
import profilePic from '../../../img/me_cropped.png';

export default class Profile extends Component {
	render () {
		return (
			<div className="profile">
				<img className="profilePic" src={profilePic} alt="Shea Fitzek" />
				<h2>I'm Shea Fitzek</h2>
				<p>
					Father...Husband<br />
					Working mech engineer<br />
					Aspiring full-stack developer<br />
				</p>
			</div>
		);
	}
}
