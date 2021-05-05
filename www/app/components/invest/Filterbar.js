import React from 'react';

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
		 this.submitData([item])
	}

	choosecheckbox(){
		var arr=[];
        $(this.refs.checkbox).find("input[type=checkbox]:checked").each(function(){
			arr.push($(this).val());
		})
		this.setState({v:arr})
	}

	submitData(arr){ // if arr is null, initall arr value with this.sate.v
       this.props.onpick(this.props.title,arr,this.props.nicktitle)
	}

	//when state has been changed
	// componentDidUpdate(){
	// 	//console.log(this.state)
	// 	if(this.state.shape=="radio"){
	// 		this.submitData();
	// 	}
	// }

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
					<a className="multibtn btn btn-success" onClick={()=>{
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
						onClick={()=>{this.submitData(this.state.v)}}
					/>
					{" "}
					<input 
						type="button" 
						className="btn" 
						value="cancel"
						onClick={()=>{
							this.setState({
								shape:"radio",
								v:[]
							})
						}}
					/>
				</div>
			)

		}
	}

	render(){
		//console.log(this.props.options)
		return (
			<div className="filterbar">
                {this.showShape()}	
			</div>	

		);
	}
}

export default Filterbar;