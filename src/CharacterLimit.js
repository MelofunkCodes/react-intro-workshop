import React from 'react';

class CharacterLimit extends React.Component{
	constructor(){
		super();
		this.state= {
			currentInput: ""
		}
	}
	_handleInput(event) {
		var value = event.target.value;
		
		//once user hits limit (i.e. 140 characters), user won't be able to type anymore text in box
		if(value.length <= this.props.limit){
			this.setState({
				currentInput: value
			});
		}
		
	}
	render(){

		return (
			<div className="character-limit">
				<input type="text" value={this.state.currentInput} onInput={this._handleInput.bind(this)} />
				<p>{this.props.limit - this.state.currentInput.length} remaining</p>
			</div>
			);
	}
}

CharacterLimit.propTypes = {
	limit: React.PropTypes.number.isRequired
}

export default CharacterLimit;