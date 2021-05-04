import React from 'react';
import { connect } from 'react-redux';
import DataRow from "./DataRow";

class DataBox extends React.Component{
	constructor({data}){
		super()

		console.log("***",data)
	}

	render(){
		//console.log(this.props.options)
		return (
			<div>
				{/* <p>
                  {JSON.stringify(this.props.data)}	
				</p> */}
				<table>
					<tbody>
						{this.props.data.map((item,index)=>{
							return <DataRow key={index} data={item}/>
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