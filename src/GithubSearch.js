import React from 'react';
import GithubSearchForm from './GithubSearchForm.js';
import GitHubProfile from './GitHubProfile.js';

class GithubSearch extends React.Component {
	constructor(){
		super();
		this.state = {};

		this._handleSearch = this._handleSearch.bind(this);
	}
	_handleSearch(searchTerm){
			this.setState({
				user: searchTerm
			});
		//console.log(searchTerm);
	}
	render(){
		var {user} = this.state;

		return (
			<div>
				<GithubSearchForm onSearch={this._handleSearch}/>
				{user ? <GitHubProfile username={user}/> : null}
			</div>
		);
	}
}

export default GithubSearch;