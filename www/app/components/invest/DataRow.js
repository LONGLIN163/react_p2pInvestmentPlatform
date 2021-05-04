import React from 'react';

class DataRow extends React.Component{
	constructor({data}){
		super()
	}

	render(){
        let data=this.props.data;
		return (
			<tr className="datarow">
				<td>{data.name}</td>
				<td>{data.school}</td>
			</tr>	

		);
	}
}

export default DataRow;