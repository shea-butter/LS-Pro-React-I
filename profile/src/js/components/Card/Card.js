import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
	render() {
		return(
			<div className="card">
				<p>
					{this.props.name}
					<img src={this.props.pic} alt="profilePic"/>
					{this.props.age}
					{this.props.location}
					{this.props.phrase}
				</p>
			</div>
		);
	}
}
