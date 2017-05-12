import React, { Component } from 'react';
import './Clock.css';

function FormattedDate(props) {
	return <h3>It's <strong>{props.time.toLocaleTimeString()}</strong></h3>;
}

export default class Clock extends Component {
	constructor(props) {
		super(props);
		this.tick = this.tick.bind(this);
		this.state = {
			time: new Date(),
		};
	}

	componentDidMount() {
		this.runningClock = setInterval(
			() => this.tick(),
			1000);
	}

	componentWillUnmount() {
		clearInterval(this.runningClock);
	}

	tick() {
		this.setState({
		time: new Date(),
		});
	}

	render() {
		return(
			<div className="clock">
				<p>What time is it?</p>
				<FormattedDate time={this.state.time} />
				<p>Where are your kids?</p>
			</div>
		);
	}
}
