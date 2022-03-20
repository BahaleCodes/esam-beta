import React from "react";
import TrackItem from "./TrackItem";

const TrackList = (props) => {
    return (
        <ul>
            {
                props.data.tracks
                    ? props.data.tracks.map((item, i) => (
                        <TrackItem i={i} item={item} key={i}/>
                    ))
                    : 'loading...'
            }
        </ul>
    )
}

export default TrackList;