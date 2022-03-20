import React from 'react';
import ArticleCard from './ArticleCard';

function ArticlesList(props) {
	return (
		props.data
			? props.data.map(item => (
				<ArticleCard
					key={item.id}
					image={item.image}
					title_name={item.title}
					readTime={38}
					timesRead={56}
					author_name={item.author}
					comment_count={76}
					link={item.id}
				/>
			))
			: 'loading...'
	)
}

export default ArticlesList;
