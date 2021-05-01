import React from 'react';

export default ({match}) => {
	return (
		<h1>我是新闻{JSON.stringify(match.params.newsid)}</h1>
	)
}