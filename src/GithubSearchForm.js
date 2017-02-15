import React from 'react';

class SearchForm extends React.Component {
	_handleSubmit(event){
		event.preventDefault();

		var username = this.refs.userInput.value;

		//console.log("user input: ", username);
		this.props.onSearch(username);
	}
	render(){
		return (
			<form onSubmit={this._handleSubmit.bind(this)}>
				<p>Enter a GitHub username: </p>
				<input type="text" ref="userInput"/>
				<button>Go!</button>
			</form>
		);
	}
}

SearchForm.propTypes = {
	onSearch: React.PropTypes.func.isRequired
}

export default SearchForm;