import React from 'react';
import { connect } from 'react-redux';
import DataRow from "./DataRow";
import SetTableBox from "./SetTableBox";


class DataBox extends React.Component{
	constructor({data}){
		super()

		this.state={
			settableboxshow:false,
			tablecol : [
				{"fieldname" : "name" 	, "outerfieldname" : "Name" , "show" : true},
				{"fieldname" : "school" , "outerfieldname" : "School" , "show" : true},
				{"fieldname" : "target" , "outerfieldname" : "Target Fund" , "show" : true},
				{"fieldname" : "done" , "outerfieldname" : "Done" , "show" : true},
				{"fieldname" : "need" , "outerfieldname" : "Need Found" , "show" : true},
				{"fieldname" : "min" , "outerfieldname" : "Min invest" , "show" : false},
				{"fieldname" : "max" , "outerfieldname" : "Max invest" , "show" : false},
				{"fieldname" : "type" , "outerfieldname" : "Type" , "show" : true},
				{"fieldname" : "rate" , "outerfieldname" : "Return Rate" , "show" : false},
				{"fieldname" : "credit" , "outerfieldname" : "Credit Star" , "show" : false},
				{"fieldname" : "province" , "outerfieldname" : "Province" , "show" : false},
				{"fieldname" : "earnings_time" , "outerfieldname" : "Return Date" , "show" : true}
			]
		}
	}

	showSetTableBox(){
        return this.state.settableboxshow ? 
		<SetTableBox 
		   setSetTableBoxShow={(this.setSetTableBoxShow).bind(this)}
		   tablecol={this.state.tablecol}
		   onsubmit = {(this.submithandler).bind(this)}
		></SetTableBox> : ""
	}

	// receive data from Settablebox,the hide SetTableBox
	submithandler(data){
		console.log("receive data from SetTableBox---",data)
		this.setState({"tablecol" : this.state.tablecol.map((obj)=>{
			return {
				...obj,
				"show" : data[obj.outerfieldname] // change current state.tablecol
			}
		})});
		this.setSetTableBoxShow(false); // close
	}

	setSetTableBoxShow(booleanvalue){
		this.setState({settableboxshow : booleanvalue})
	}

	render(){
		//console.log(this.props.options)
		return (
			<div className="databox">
				<hr/>
				<br/>
				search result : {this.props.data.length}
				<div className="text-right"> 
					<a onClick={()=>{this.setSetTableBoxShow(true)}}><b>Set table colums</b></a>
					{this.showSetTableBox()}
				</div>
				<table>
					<thead>

						<tr>
							{this.state.tablecol.map((item,index)=>{
								if(item.show){
									return <th key={index}>{item.outerfieldname}</th>
								}
							})}
						</tr>
					</thead>
					<tbody>
						{this.props.data.map((item,index)=>{
							return <DataRow key={index} data={item} tablecol={this.state.tablecol}/>
						})}
					</tbody>
				</table>
			</div>	

		);
	}
}

export default connect(
	(state)=>{
		return {
			"data":state.investReducer.data,
		}
	}
)(DataBox);