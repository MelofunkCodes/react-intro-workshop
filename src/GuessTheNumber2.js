import React from 'react';

class GuessTheNumber2 extends React.Component {
	constructor(){
		super();
		this.state={
			guesses: []
		};

		this._startGame = this._startGame.bind(this);
		this._handleGuessButtonClick = this._handleGuessButtonClick.bind(this);
		this._playGame = this._playGame.bind(this);
		this._handleWin = this._handleWin.bind(this);
		this._handleLoss = this._handleLoss.bind(this);
	}

	_startGame(){
		this.setState({ // something between 1 and 100 generated when we start a game
			guesses: [],
			numberToGuess: Math.floor(Math.random()*100 + 1)
		});

	}
	componentDidMount(){ //start a new game once component gets mounted in the DOM
		this._startGame();
	}


	//another way to declare you functions without using bind. ES6 arrow functions
	_handleGuessButtonClick = () => {
		var userGuess = +this.refs.userGuess.value;
		var {guesses} = this.state;
		guesses.push(userGuess);

		this.setState({
			guesses: guesses
		});
	}//first "this" is referring to _handleButtonClick, the second "this" in the bind, is sending over the userGuess from input tag. WRONG. Ziad said both "this" 's are equal.

	_playGame(){
		var { guesses, numberToGuess } = this.state; 
		//THIS is available GLOBALLY, but you need to redefine numberToGuess inside the scope of this function

		return (
			<div className="guessing">
				<h4>Guess a number between 1 and 100:</h4>
				<p>{"Your Guesses: " + guesses}</p>
				<p>{guesses[guesses.length-1]<numberToGuess ?  "TOO LOW" : null}</p>
				<p>{guesses[guesses.length-1]>numberToGuess ?  "TOO HIGH" : null}</p>
				<p>Remaining Tries:  {5 - guesses.length}</p>

				<div>
					<input type="text" ref="userGuess"/>
					<button type="button" onClick={this._handleGuessButtonClick}>GUESS</button>
				</div>
			</div>
		);
	}

	_handleWin(){
		var {numberToGuess} = this.state;
		//THIS is available GLOBALLY, but you need to redefine numberToGuess inside the scope of this function

		return (
			<div className="win-game">
				<p>YOU WIN!</p>
				<p>The correct number was {numberToGuess}. Great job!</p>
				<button onClick={this._startGame}>Play again</button>
			</div>
		);
	}
	_handleLoss(){
		var {numberToGuess} = this.state;
		//THIS is available GLOBALLY, but you need to redefine numberToGuess inside the scope of this function

		return (
			<div className="lose-game">
				<p>YOU LOSE!</p>
				<p>The correct number was {numberToGuess}. :( </p>
				<button onClick={this._startGame}>Play again</button>
			</div>
		);
	}


//=================================================================================
	render() {
		var { guesses, numberToGuess } = this.state; //when using this.state alot, can just assign it like this so you don't have to write it too often in your JSX

		// console.log("number to guess: ", numberToGuess, typeof numberToGuess);
		// console.log("latest guess: ", guesses[guesses.length-1]);
		//console.log(guesses.length < 5 && guesses[guesses.length-1] !== numberToGuess );

		//executing this._playGame() versus PASSING it the function (this._playGame) because in this context if the conditional is true, you WANT the function to execute then and there
		return (
			<div className="guess-the-number">
				{guesses.length < 5 && guesses[guesses.length-1] !== numberToGuess ? this._playGame() : null}

				{guesses[guesses.length-1] === numberToGuess ? this._handleWin() : null}
				{guesses.length === 5 ? this._handleLoss() : null}
			</div>
		);
	}
}


export default GuessTheNumber2;