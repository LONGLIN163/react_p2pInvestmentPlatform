import React from 'react';
import { connect } from 'react-redux';
import Filterbar from "./Filterbar";
import CurrentFilter from "./CurrentFilter";
import DataBox from "./DataBox";
import Range from "../common/range/Range";
import BECalender from "../common/becalendar/BECalender"

import {fetchInitFilter, addFilter,fetchData} from "../../actions/investActions";

class Invest extends React.Component{

	constructor({dispatch}){
		super()
		dispatch(fetchInitFilter());
		dispatch(fetchData());
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
						<div className="col-lg-1 filter_t">
							<div className="title">
						       {propsobj.title}:
							</div>
						</div>
						<div className="col-lg-11">
				           <Filterbar {...propsobj}></Filterbar> 
						</div>
			        </div>
		} 	
	}


	showRangebar(propsobj){
		//console.log("propsobj in range",propsobj)
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
						<div className="col-lg-1 filter_t">
						<div className="title">
						       {propsobj.title}:
						</div>
						   
						</div>
						<div className="col-lg-11">
						   <Range {...propsobj} onpick={this.pickHandler.bind(this)}></Range>
						</div>
			        </div>
		} 	
	}
	showBECalendar(propsobj){
		//console.log("propsobj in date",propsobj)
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
						<div className="col-lg-1 filter_t">
						<div className="title">
						       {propsobj.title}:
						</div>
						</div>
						<div className="col-lg-11">
						<BECalender {...propsobj}/>						
						</div>
			        </div>
		} 	
	}


	render(){
		var d=new Date();
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
										title:"need",
										width:600,
										// min:this.props.filters.need.min,
										// max:this.props.filters.need.max,
										// scaleLeft:this.props.filters.need.scaleLeft,
										// scaleRight:this.props.filters.need.scaleRight,
										min:0,
										max:50000,
										onpick:this.pickHandler.bind(this)
									})
								}
						</div>
						<div className="row" style={{"position":"relative"}}>
						         {
									this.showBECalendar({
										title:"date",
										onpick: this.pickHandler.bind(this),
										// byear:  this.props.filters.date.byear,
										// bmonth: this.props.filters.date.bmonth,
										// bday:   this.props.filters.date.bday,
										// eyear:  this.props.filters.date.eyear,
										// emonth: this.props.filters.date.emonth,
										// eday:   this.props.filters.date.eday
									})
								}
						</div>

						</div>
					</div>
					<div className="databox">
						<DataBox></DataBox>
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