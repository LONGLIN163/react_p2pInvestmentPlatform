import React from 'react';
import { connect } from 'react-redux';

class Filterbar extends React.Component{
	constructor(){
		super()

		this.state={
			v:[], //store filter item
			shape:"radio" // filter type
		}
	}

	chooseradio(item){
         this.setState({v:[item]})

		 this.submitData()
	}

	choosecheckbox(){
		var arr=[];
        $(this.refs.checkbox).find("input[type=checkbox]:checked").each(function(){
			arr.push($(this).val());
		})
		this.setState({v:arr})
	}

	submitData(){

	}

	componentDidUpdate(){
		console.log(this.state)
	}

	showShape(){
		if(this.state.shape=="radio"){
			return (
				<div className="radio">
					{
						this.props.options.map((item,index)=>{
							return <a 
								className={this.state.v[0]==item ? "cur" : ""} 
								key={index} 
								onClick={()=>{this.chooseradio(item)}}
							>{item}</a>
						}) 
					}
					<a className="multibtn" onClick={()=>{
						this.setState({"shape":"checkbox"})
					}}>checkbox+</a>
				</div>
			)
		}else{
			return(
				<div className="checkbox" ref="checkbox">
					{
						this.props.options.map((item,index)=>{
							return <label 
							  key={index}
							  onClick={(this.choosecheckbox).bind(this)}
							><input type="checkbox" value={item}/>{item}</label>
						}) 
					}
					<input 
						type="button" 
						className="btn btn-success" 
						value="confirm"
						onClick={(this.submitData)}
					/>
					{" "}
					<input type="button" className="btn" value="cancel"/>
				</div>
			)

		}
	}

	render(){
		//console.log(this.props.options)
		return (
			<div className="filterbar">
				<div className="row">
					<div className="col-lg-1">school</div>
					<div className="col-lg-11">
                      {this.showShape()}	
					</div>
				</div>
			</div>	

		);
	}
}

export default Filterbar;