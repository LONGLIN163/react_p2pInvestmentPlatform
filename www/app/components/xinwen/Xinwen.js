import React from 'react';
import { Route , Link , NavLink } from 'react-router-dom';
import XinwenArticle from "./XinwenArticle";

const data = [
	{ "id" : 1 , "title" : "新闻1" },
	{ "id" : 2 , "title" : "新闻2" },
	{ "id" : 3 , "title" : "新闻3" },
	{ "id" : 4 , "title" : "新闻4" }
];

export default ({match}) => {
	return (
		<section>
			<h1>我是新闻栏目{JSON.stringify(match)}</h1>

			{
				data.map((item,index) => {
					return <NavLink activeClassName="cur" key={index} to={match.path + "/" + item.id}>{item.title}</NavLink>
				})
			}

			<Route path={match.path + "/:newsid"} component={XinwenArticle}></Route>
		</section>
	);
}