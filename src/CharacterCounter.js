import React from 'react';

class CharacterCounter extends React.Component{
	constructor(){
		super();
		this.state= {
			currentInput: ""
		}
	}
	_handleInput(event) {
		var value = event.target.value;
		console.log("value: ", value);

		this.setState({
			currentInput: value
		});
	}
	render(){

		return (
			<div className="character-counter">
				<input type="text" ref="userWords" onInput={this._handleInput.bind(this)} />
				<p>Number of characters you typed: {this.state.currentInput.length}</p>
			</div>
			);
	}
}

export default CharacterCounter;