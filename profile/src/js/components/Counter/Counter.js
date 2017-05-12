import React, { Component } from 'react'; // use this method for dynamic components where 'state' is needed
import './Counter.css';


export default class Counter extends Component { // use the class export method for dynamic components where 'state' is needed
	constructor(props) {
		super(props);
		this.incrementCount = this.incrementCount.bind(this);
		this.state = {
			count: 0,
		};
	}

	incrementCount() {
	// this.setState({ // use this method if the new state can be set without the current state
	// 	count: this.State.count + 1,
	// });

		this.setState((currentState) => { // use this method if the current state must be accessed to set the new state
			return {
				count: currentState.count + 1,
			}
		});
	}

	render() {
		return(
			<div className="counter">
				<p><button onClick={this.incrementCount}>Increment</button> {this.state.count}</p>
			</div>
		);
	}
}
