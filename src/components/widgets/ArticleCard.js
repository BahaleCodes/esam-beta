import React from 'react';
// import { Link } from 'react-router-dom';
// import { BsFillClockFill, BsFillChatRightFill, BsFillPersonFill, BsEyeFill } from "react-icons/bs";

import '../styles/ArticleCard.css';

function ArticleCard(props) {
	return (
		<div className="flex flex-col items-center">
			<span className="h-16 w-16 rounded-full overflow-hidden flex text-white">
				<img className="object-cover" src="https://imgur.com/jLpbfDB.jpg" alt="Everything South African Music Object comver" />
			</span>
			<p className="text-green-400 font-medium text-xs mt-1">Add<i className="fa fa-plus ml-1"></i></p>
		</div>
	)
}

export default ArticleCard
