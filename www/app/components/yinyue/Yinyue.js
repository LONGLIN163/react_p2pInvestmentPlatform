import React from 'react';
import { connect } from 'react-redux';

class Yinyue extends React.Component{
	render(){
		return (
			<section>
				我是音乐{JSON.stringify(this.props.state)}
			</section>
		)
	}
}


export default connect(
	(state) => {
		return {
			state : state.reducer
		}
	}
)(Yinyue)