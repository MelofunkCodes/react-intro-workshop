import React from 'react';
import './GitHubProfile.css';
import 'whatwg-fetch'; //enabling polyfill fetch that allows fetch to perform GET requests on older browsers (link: https://github.com/github/fetch)


class GitHubProfile extends React.Component {
	constructor(){
		super();
		this.state = {};

		this.componentDidMount = this.componentDidMount.bind(this);
		//this.fetchData = this.fetchData.bind(this);
	}

	componentDidMount(){
		this.fetchData();//calling it at initial instance
	}

	componentDidUpdate(prevProps){
		if(prevProps.username !== this.props.username){ //if user entered different username, call fetchData again
			this.fetchData();
		}
	}

	//make AJAX call as soon as component mounted on the DOM
	fetchData(){
		//var that = this;

		fetch(`https://api.github.com/users/${this.props.username}`)
		.then(response => response.json())
		.then(function(data){
			console.log("data: ", data, typeof data);

			this.setState({
				user: data
			});
		}.bind(this));


	}

	render(){
		var {user} = this.state;

		//console.log("user:", this.state.user);

		return (
			<div className="github-profile">
				{user ? (
					<div className="user">
						<div className="avatar">
							<img className="github-user_avatar" src={user.avatar_url} alt={`avatar of ${user.login}`}/>
						</div>
					    <div className="github-user_info">
						    <p>{user.login} ({user.name})</p>
						    <p>{user.bio ? user.bio : null}</p>
					  	</div>
					</div>
					)
				:
				(<div>
					LOADING...
				</div>
				)}
			</div>
		);
	}

}

GitHubProfile.proptypes ={
	username: React.PropTypes.string.isRequired
}

export default GitHubProfile;