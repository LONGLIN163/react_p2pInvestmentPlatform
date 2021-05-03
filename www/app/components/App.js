import React from 'react';
import Invest from "./invest/Invest.js";
import Home from "./home/Home.js";
import { Route , Link } from 'react-router-dom';


class App extends React.Component {

	constructor(){
		super()
		this.state={
			homeActive:true,
			investActive:false
		}

		//this.testactive=this.testactive.bind(this);

		
	}

	// testactive(hash){
	// 	var hasharr = window.location.hash.substr(2).split("/");
	// 	console.log(hasharr)
	// 	if(hasharr[0] == hash){
	// 		return "active";
	// 	}
	// 	return "";
	// }
	
	render(){

		//console.log(this.state.current)

		return (
			<section>
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">P2P_InvestmentPlatform</a>
						</div>
	
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav">
								<li className={this.state.homeActive == true ? "active" : ""} onClick={()=>{this.setState({
									homeActive:true,
									investActive:false
								})}}><Link to="/">Home<span className="sr-only"></span></Link></li>
								<li className={this.state.investActive == true ? "active" : ""} onClick={()=>{this.setState({
									investActive:true,
									homeActive:false
								})}}><Link to="/invest">Invest<span className="sr-only"></span></Link></li>
								{/* <li className={this.testactive("")}><Link to="/">Home<span className="sr-only"></span></Link></li>
								<li className={this.testactive("invest")}><Link to="/invest">Invest<span className="sr-only"></span></Link></li> */}

							</ul>
							<ul className="nav navbar-nav navbar-right">
								<li><a href="#">welcome</a></li>
							</ul>
						</div>
					   </div>
					</nav>
				<section className="main">
					<Route exact path="/" component={Home}></Route>
					<Route path="/invest" component={Invest}></Route>
				</section>
	
			</section>
		);

	}
}

export default App;