import React, { Component } from 'react';
import './Body.css';
import Profile from '../Profile/Profile.js';
import Counter from '../Counter/Counter.js';
import Clock from '../Clock/Clock.js';
import Feed from '../Feed/Feed.js';

export default class Body extends Component {
	render () {
		return (
			<div className="body">
				<Profile />
				<Counter />
				<Clock />
				<Feed />
			</div>
		);
	}
}
