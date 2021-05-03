import React from 'react';
import { connect } from 'react-redux';
import Filterbar from "./Filterbar";

import {fetchInitData} from "../../actions/investActions";

class Invest extends React.Component{

	constructor({dispatch}){
		super()
		dispatch(fetchInitData("school"));
	}

	pickHandler(title,v){
		 console.log(title,v)
	}

	render(){

		return (
			<section>
				<div className="container">
					<div className="filterBox">
						<div className="row">
                        <Filterbar options={this.props.schools} title="School" onpick={(this.pickHandler).bind(this)}></Filterbar>	
                        {/* <Filterbar></Filterbar>	 */}
                        {/* <Filterbar></Filterbar>	 */}
						</div>
					</div>
				</div>
			</section>

		);
	}
}

export default connect(
	(state)=>{
		console.log(state)
		return {
			"schools":state.investReducer.filter.schools
		}
	}
)(Invest);