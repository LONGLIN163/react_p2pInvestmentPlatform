import React from 'react';
import Yinyue from "./yinyue/Yinyue.js";
import Xinwen from "./xinwen/Xinwen.js";
import Home from "./home/Home.js";
import { Route , Link } from 'react-router-dom'


export default () => {
	return (
		<section>
			<header>
				<Link to="/">首页</Link>
				<Link to="/yinyue">音乐</Link>
				<Link to="/xinwen">新闻</Link>
			</header>
			<section className="main">
				<Route exact path="/" component={Home}></Route>
				<Route path="/yinyue" component={Yinyue}></Route>
				<Route path="/xinwen" component={Xinwen}></Route>
			</section>
		</section>
	);
}