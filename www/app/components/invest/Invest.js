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

		if(titleExist){
			return ""
		}else{
			return <div>
						<div className="col-lg-2 filter_t">
						   {propsobj.title}:
						</div>
						<div className="col-lg-10">
				           <Filterbar {...propsobj}></Filterbar> 
						</div>
			        </div>
		} 	
	}


	showRangebar(propsobj){
		console.log("propsobj in range",propsobj)
		var titleExist=false;
		this.props.currentFilters.forEach((item)=>{
			if(item.filterTitle==propsobj.title){
				titleExist=true;
				return;
			}
		})

		if(titleExist){
			return ""
		}else{
			return <div>
						<div className="col-lg-2 filter_t">
						   {propsobj.title}:
						</div>
						<div className="col-lg-10">
						   <Range {...propsobj} onpick={this.pickHandler.bind(this)}></Range>
						</div>
			        </div>
		} 	
	}

	render(){

		console.log("---------------",this.props)

		return (
			<section>
				<div className="container">
					<div className="filterBox">
						<div className="row">
						<CurrentFilter dispatch={this.props.dispatch} currentFilters={this.props.currentFilters}></CurrentFilter>

						<div className="row">

								{
									this.showFilterbar({
										options:this.props.filters.schools,
										title:"schools",
										onpick:this.pickHandler.bind(this)
									})
								}
							
						</div>

						<div className="row">

								{
									this.showFilterbar({
										options:this.props.filters.types,
										title:"types",
										onpick:this.pickHandler.bind(this)
									})
								}

						</div>

						<div className="row">
						       {
									this.showRangebar({
										title:"investment",
										width:600,
										min:this.props.filters.need.min,
										max:this.props.filters.need.max,
										// min:0,
										// max:54000,
										onpick:this.pickHandler.bind(this)
									})
								}
						</div>
						{/* <div className="row">
						       {
									this.showRangebar({
										title:"expected returns",
										width:600,
										min:100,
										max:50000,
										onpick:this.pickHandler.bind(this)
									})
								}
						</div> */}

                       {/* <div className="row">
							<div className="col-lg-2 filter_t">
							     Fund demand:
							</div>
							<div className="col-lg-10">
								<Range width={600} min={100} max={1200} onpick={this.pickHandler.bind(this)}></Range>
							</div>
						</div> */}

						</div>
					</div>
				</div>
			</section>

		);
	}
}

export default connect(
	(state)=>{
		console.log("statehahaha",state)
		return {
			"filters":state.investReducer.filters,
			"currentFilters":state.investReducer.currentFilters,
		}
	}
)(Invest);