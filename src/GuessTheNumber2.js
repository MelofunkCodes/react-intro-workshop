import React from 'react';

class GuessTheNumber2 extends React.Component {
	constructor(){
		super();
		this.state={
			gameStatus: "playing",
			guesses: []
		};
	}

	_startGame(){
		this.setState({ // something between 1 and 100 generated when we start a game
			gameStatus: "playing",
			guesses: []
		});
	}
	componentDidMount(){ //start a new game once component gets mounted in the DOM
		this._startGame();
	}

	_handleGuessButtonClick = () => {
		var userGuess = +this.refs.userGuess.value;
		var {guesses} = this.state
		guesses.push(userGuess)
		this.setState({
			gameStatus: "playing",
			guesses: guesses
		});

	}//first "this" is referring to _handleButtonClick, the second "this" in the bind, is sending over the userGuess from input tag
	render() {
		var { guesses, gameStatus } = this.state;
		var {numberToGuess} = this.props;
		return (
			<div className="guess-the-number">
				Guess a number between 1 and 100:
				{"your guesses:" + this.state.guesses}
				{guesses[guesses.length-1]<numberToGuess ?  "TO LOW" : null}
				{guesses[guesses.length-1]>numberToGuess ?  "TOO HIGH" : null}
				{guesses[guesses.length-1]===numberToGuess ? (
					<button onClick={this._startGame.bind(this)}>Bravo, play again</button>
					)
				: null
				}
				{"remainingTries: " + 5-this.state.guesses.length}

				<div>
					<input type="text" ref="userGuess"/>
					<button type="button" onClick={this._handleGuessButtonClick}>GUESS</button>
				</div>
			</div>
		);
	}
}

GuessTheNumber2.propTypes = {
	numberToGuess: React.PropTypes.number.isRequired
}

export default GuessTheNumber2;