import React from 'react';

class CurrentFilter extends React.Component{
	constructor({currentFilters}){
		super()
	}

	showCurrentFilter(){
		var arr=[];
		this.props.currentFilters.forEach((item,index)=>{
			console.log("v",item)
			if(index!=0){
				arr.push(<li key={arr.length} className="t"> & </li>)
			}
			arr.push(<li key={arr.length} >{item.filterTitle}: {item.v.join(" or ")}</li>)
		})
        return(
			<ul>
				{arr}
			</ul>
		)
	}

	render(){
		//console.log(this.props.options)
		return (
			<div className="currentFilter">
				{/* {JSON.stringify(this.props.currentFilters)} */}
				<div className="row">
					<div className="col-lg-1">
				        current filters:
					</div>
					<div className="col-lg-11">
                        {this.showCurrentFilter()}
					</div>
				</div>


			</div>
		);
	}
}

export default CurrentFilter;