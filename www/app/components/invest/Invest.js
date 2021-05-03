import React from 'react';
import { connect } from 'react-redux';
import Filterbar from "./Filterbar";
import CurrentFilter from "./CurrentFilter";
import Range from "../common/range/Range"

import {fetchInitData, addFilter} from "../../actions/investActions";

class Invest extends React.Component{

	constructor({dispatch}){
		super()
		dispatch(fetchInitData());
	}

	// recieve data from sub component
	pickHandler(title,v){
		 console.log("recieve data from sub compo:",title,v)
		 //dispatch(addFilter(title,v))// add data to general filters
		 this.props.dispatch(addFilter(title,v))// add data to general filters
	}

	showFilterbar(propsobj){
		var titleExist=false;
		this.props.currentFilters.forEach((item)=>{
			if(item.filterTitle==propsobj.title){
				titleExist=true;
				return;
			}
		})

		return titleExist ? "" : <Filterbar {...propsobj}></Filterbar> 	
	}

	render(){

		return (
			<section>
				<div className="container">
					<div className="filterBox">
						<div className="row">
						<CurrentFilter dispatch={this.props.dispatch} currentFilters={this.props.currentFilters}></CurrentFilter>

						<div className="row">
							<div className="col-lg-2 filter_t">
								Schools:
							</div>
							<div className="col-lg-10">
								{
									this.showFilterbar({
										options:this.props.filters.schools,
										title:"schools",
										onpick:this.pickHandler.bind(this)
									})
								}
							</div>
						</div>

						<div className="row">
							<div className="col-lg-2 filter_t">
							     Types:
							</div>
							<div className="col-lg-10">
								{
									this.showFilterbar({
										options:this.props.filters.types,
										title:"types",
										onpick:this.pickHandler.bind(this)
									})
								}
							</div>
						</div>

						<div className="row">
							<div className="col-lg-2 filter_t">
							     Fund demand:
							</div>
							<div className="col-lg-10">
								<Range width={1000} min={100} max={12000}></Range>
							</div>
						</div>



                        {/* <Filterbar options={this.props.filters.schools} title="schools" onpick={(this.pickHandler).bind(this)}></Filterbar>	 */}
                        {/* <Filterbar options={this.props.filters.types} title="types" onpick={(this.pickHandler).bind(this)}></Filterbar>	 */}

						</div>
					</div>
				</div>
			</section>

		);
	}
}

export default connect(
	(state)=>{
		console.log("state",state)
		return {
			"filters":state.investReducer.filters,
			"currentFilters":state.investReducer.currentFilters,
		}
	}
)(Invest);