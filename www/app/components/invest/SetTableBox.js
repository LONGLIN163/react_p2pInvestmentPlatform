import React from 'react';


class SetTableBox extends React.Component{
	constructor({setSetTableBoxShow,tablecol}){
		super()
		this.state=(function(){// IIFE to get all k,v of checked(show) status
			var o = {};
			tablecol.forEach(function(item){
				o[item.outerfieldname] = item.show 
			});
			return o;
		})();;

		console.log("SetTableBox state:",this.state)

	}

	componentDidMount(){
		$(this.refs.innerbox).css("top" , "-100%").show().animate({"top" : "50%"},500);
	}

	exit(){
		var self = this;
		$(this.refs.innerbox).animate({"top" : "-100%"},500,function(){
			self.props.setSetTableBoxShow(false);
		});
	}


	setc(fieldname,event){
		console.log(fieldname,event.target.checked)
		this.setState({[fieldname] : event.target.checked})
	}

	// loop this.state and databinding
	showLabels(){
		var arr = [];
		for(let k in this.state){
			arr.push(<label key={arr.length}>
							<input 
								type="checkbox" 
								checked={this.state[k]} 
								onChange={(event)=>{this.setc(k,event)}}
								disabled={k == "Name"} // do not delete name
							/>
							{k}
					</label>	
			)
		}
		return arr;		 
	}

	render(){
		//console.log(this.props.options)
		return (
			<div className="settablebox">
                <div className="innerbox" ref="innerbox">
					<a className="closebtn" 
					onClick={()=>{this.exit()}}>x</a>
					<div className="text-left">
						{this.showLabels()}
						{/* {this.state.tablecol.map((item,index)=>{
                           return <label key={index}><input type="checkbox" checked={item.show} onChange={(event)=>{
							   this.setc(item.fieldname,event)
						   }}/>{item.outerfieldname}</label>
						})} */}
					</div>
					<input type="button" value="Confirm" onClick={()=>{
						this.props.onsubmit(this.state)
					}}/>
					
					<input type="button" value="Select All" onClick={()=>{
					 
					 for(let k in this.state){
						 this.setState({[k] : true});
					 }
					  
				    }}/>

                    <input type="button" value="Concel All" onClick={()=>{
						for(let k in this.state){
							if(k != "Name") this.setState({[k] : false});
						}
					}}/>
				</div>
			</div>	

		);
	}
}

export default SetTableBox;