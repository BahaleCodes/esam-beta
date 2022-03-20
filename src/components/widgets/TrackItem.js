import React from 'react';

import "../styles/TrackItem.css";

const TrackItem = (props) => {
    return (
        <li
            className='TrackItem'
            key={`${props.i}-${props.item.track_number}`}
        >
            <h4
                className='Track-text'>
                {props.item.track_title}
            </h4>
            <p 
                className='Track-mata-data'
                >
                    {props.item.feature}
                </p>
        </li>
    )
}

export default TrackItem;