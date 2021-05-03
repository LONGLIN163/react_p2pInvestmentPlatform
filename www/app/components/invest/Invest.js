import React from 'react';
import { connect } from 'react-redux';
import Filterbar from "./Filterbar";
import CurrentFilter from "./CurrentFilter";

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

						{
							this.showFilterbar({
								 options:this.props.filters.schools,
								 title:"schools",
								 onpick:this.pickHandler.bind(this)
							})
						}
						{
							this.showFilterbar({
								 options:this.props.filters.types,
								 title:"types",
								 onpick:this.pickHandler.bind(this)
							})
						}



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