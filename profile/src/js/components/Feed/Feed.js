import React, { Component } from 'react';
import feedData from '../../../fakeServer/feedData.js';
import Card from '../Card/Card.js';
import './Feed.css';

export default class Feed extends Component {
	render() {
		return(
			<div className="feed">
				{feedData.map((user) => {
					return <Card
						name={user.name}
						age={user.age}
						location={user.location}
						phrase={user.phrase}
						pic={user.pic}
					/>;
				})}
			</div>
		);
	}
}
