import React from 'react';

class GuessTheNumber extends React.Component {
	_handleButtonClick(){
		var userGuess = +this.refs.userGuess.value;
		var numberToGuess = this.props.numberToGuess;

		//var numberToGuess = Math.floor( Math.random()*100 +1);
		//console.log("number to guess: ", numberToGuess);

		if(userGuess === numberToGuess){
			alert("Congratulations! You guessed the right number!");
		}
		else if( userGuess < numberToGuess){
			alert("Too low! Try again!");
		}
		else {
			alert("Too high! Try again!");
		}

	}//first "this" is referring to _handleButtonClick, the second "this" in the bind, is sending over the userGuess from input tag
	render() {
		return (
			<div className="guess-the-number">
				Guess a number between 1 and 100:
				<div>
					<input type="text" ref="userGuess"/>
					<button type="button" onClick={this._handleButtonClick.bind(this)}>GUESS</button>
				</div>
			</div>
		);
	}
}

GuessTheNumber.propTypes = {
	numberToGuess: React.PropTypes.number.isRequired
}

export default GuessTheNumber;