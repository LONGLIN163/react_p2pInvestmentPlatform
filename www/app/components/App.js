import React from 'react';
import Yinyue from "./yinyue/Yinyue.js";
import Xinwen from "./xinwen/Xinwen.js";
import Home from "./home/Home.js";
import { Route , Link , NavLink } from 'react-router-dom';


let testactive=(hash)=>{
	var hashArr=window.location.hash.substr(2).split("/");
	console.log(hashArr)
	if(hashArr[0]==hash){
       return "active"
	}
	return "";
}

export default () => {
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
							<li className={testactive("")}><Link to="/">Home<span className="sr-only"></span></Link></li>
							<li className={testactive("invest")}><Link to="/invest">invest<span className="sr-only"></span></Link></li>
							{/* <li className={testactive("")}><a href="/">Home<span className="sr-only"></span></a></li>
							<li className={testactive("invest")}><a href="#/invest">invest<span className="sr-only"></span></a></li> */}
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li><a href="#">welcome</a></li>
						</ul>
					</div>
				   </div>
			    </nav>
			<section className="main">
				<Route exact path="/" component={Home}></Route>
				<Route path="/yinyue" component={Yinyue}></Route>
				<Route path="/xinwen" component={Xinwen}></Route>
			</section>

		</section>
	);
}