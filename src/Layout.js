import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

//stateless component. Just uses its props to render ui
class Layout extends React.Component {
	constructor(props){
		super(props); //this = props
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		//mixin tells react not to re-render if nothing has changed
	}
	render(){
		return (
			<div className="layout">
				<nav className="main-nav">
					<ul>
						<li><a href="/">Home</a></li>
					</ul>
				</nav>
				<main>
					{this.props.children}
				</main>
				<footer>
					Copywhat 2016 Kittens
				</footer>
			</div>
			);
	}

}

export default Layout;