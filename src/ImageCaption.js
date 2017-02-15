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
        // var {source, text} = this.props;
        //since source and text does not change in this component can change var to const or "let"
        const {source, text} = this.props;

        return ( 
        	<figure>
        		<img src={source} alt="pic not loaded" />
        		<figcaption>
        			{text}
        		</figcaption>
            </figure>
        );
    }
}

export default ImageCaption;



