import React from 'react';
import { connect } from 'react-redux';
import Filterbar from "./Filterbar";

class Invest extends React.Component{

	pickHandler(title,v){
		 console.log(title,v)
	}

	render(){

		return (
			<section>
				<div className="container">
					<div className="filterBox">
						<div className="row">
                        <Filterbar options={["java","react","vue","angular"]} title="School" onpick={(this.pickHandler).bind(this)}></Filterbar>	
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
      return state;
	}
)(Invest);