import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

//stateless component. Just uses its props to render ui
class ImageCaption extends React.Component {
	constructor(props){
		super(props); //this = props
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		//mixin tells react not to re-render if nothing has changed
	}
    render() {
        return ( 
        	<figure>
        		<img src={this.props.source} alt="pic not loaded" />
        		<figcaption>
        			{this.props.text}
        		</figcaption>
            </figure>
        );
    }
}

export default ImageCaption;
