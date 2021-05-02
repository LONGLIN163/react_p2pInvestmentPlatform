import React from 'react';
import { connect } from 'react-redux';

class Invest extends React.Component{

	render(){

		return (
			<section>
				<div className="container">
					<div className="filterBox">
						<div className="row">
							<div className="filterbar">
								<div className="row">
                                  <div className="col-lg-1">school</div>
                                  <div className="col-lg-11">
									  <a>school</a>
									  <a>school</a>
									  <a>school</a>
									  <a>school</a>
									  <a>school</a>
								  </div>
								</div>
							</div>	
						</div>
					</div>
				</div>
			</section>

		);
	}
}

export default connect()(Invest);