import React from 'react';

class YouClicked extends React.Component{
	constructor(){
		super();
		this.state = {
			timesClicked: 0,
			timesReset: 0,
			message: "You have not clicked the button",
			resetMessage: ""
		}
	}
	_handleButtonClick(){
		this.setState({ //this will call a re-render of my component
			message: `You have clicked the button ${this.state.timesClicked+1} time(s)`,
			timesClicked: this.state.timesClicked + 1
		});
	}
	_handleReset(){
		this.setState({
			timesClicked: 0,
			timesReset: this.state.timesReset + 1,
			message: "You have not clicked the button",
			resetMessage: `You have reset ${this.state.timesReset+1} time(s)`
		});
	}
	render(){

		return (
			<div className="you-clicked">
				<button type="button" onClick={this._handleButtonClick.bind(this)}>CLICK ME!</button>
				<button type="button" onClick={this._handleReset.bind(this)}>RESET</button>
				<p>{this.state.message}</p>
				<p>{this.state.resetMessage}</p>
			</div>
		);
	}
}

export default YouClicked;