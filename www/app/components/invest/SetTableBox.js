import React from 'react';


class SetTableBox extends React.Component{
	constructor(){
		super()

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

	render(){
		//console.log(this.props.options)
		return (
			<div className="settablebox">
                <div className="innerbox" ref="innerbox">
					<a className="closebtn" 
					onClick={()=>{this.exit()}}>x</a>
					<div className="text-left">
						{this.props.tablecol.map((item,index)=>{
                           return <label key={index}><input type="checkbox"/>{item.outerfieldname}</label>
						})}
					</div>
				</div>
			</div>	

		);
	}
}

export default SetTableBox;