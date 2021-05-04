import React from 'react';
import {delFilter} from "../../actions/investActions";


class CurrentFilter extends React.Component{
	constructor({}){
		super()
	}

	delme(filterTitle){
        this.props.dispatch(delFilter(filterTitle))
	}

	showCurrentFilter(){
		var arr=[];
		this.props.currentFilters.forEach((item,index)=>{
			console.log("v",item)
			if(index!=0){
				arr.push(<li key={arr.length} className="t"> & </li>)
			}
			if(item.filterTitle=="schools" || item.filterTitle=="types"){
				arr.push(<li 
					key={arr.length}
					onClick={()=>{this.delme(item.filterTitle)}} 
				>{item.filterTitle}: {item.v.join(" or ")}</li>)
			}else if(item.filterTitle=="need"){
				arr.push(<li 
					key={arr.length}
					onClick={()=>{this.delme(item.filterTitle)}} 
				>{item.filterTitle}: {item.v.scaleLeft}~{item.v.scaleRight}</li>)
			}else if(item.filterTitle=="date"){
				arr.push(<li 
					key={arr.length}
					onClick={()=>{this.delme(item.filterTitle)}} 
				>{item.filterTitle}: {item.v.byear}.{item.v.bmonth}.{item.v.bday}~{item.v.eyear}.{item.v.emonth}.{item.v.eday}</li>)
			}
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
				        filters:
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