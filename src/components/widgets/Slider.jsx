import React, { Fragment } from 'react';
import './Styles/ContentSlider.css'


const Slider = (props) => {
	return (
		<div className='content_slider'>
			<h2>{props.title}</h2>
			<div className='contentSlider_content'>
				{props.children}
			</div>
		</div>
	)
}
export  default Slider;