import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillClockFill, BsFillChatRightFill, BsFillPersonFill, BsEyeFill } from "react-icons/bs";

import '../styles/ArticleCard.css';

function ArticleCard(props) {
	return (
		<div class="flex flex-col items-center">
			<span class="h-16 w-16 rounded-full overflow-hidden flex text-white">
				<img class="object-cover" src="https://imgur.com/jLpbfDB.jpg" />
			</span>
			<p class="text-green-400 font-medium text-xs mt-1">Add<i class="fa fa-plus ml-1"></i></p>
		</div>
	)
}

export default ArticleCard
