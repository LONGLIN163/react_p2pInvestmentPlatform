import React from 'react';
import { connect } from 'react-redux';
import Filterbar from "./Filterbar";

class Invest extends React.Component{

	render(){

		return (
			<section>
				<div className="container">
					<div className="filterBox">
						<div className="row">
                        <Filterbar options={["java","react","vue","angular"]}></Filterbar>	
                        {/* <Filterbar></Filterbar>	 */}
                        {/* <Filterbar></Filterbar>	 */}
						</div>
					</div>
				</div>
			</section>

		);
	}
}

export default connect()(Invest);