import React, { useEffect, useState } from "react";

import JsonData from '../../db/ESAM.json';
import Banner from "./Banner";
import TrackList from "./TrackList";

const ViewAlbum = (props) => {
    // const { state } = props.location;
    const [data, setData] = useState({});
    useEffect(() => {
        setData(JsonData.VictoryLap);
        console.log(data);
    }, [data])
    return (
        <div style={{ marginTop: "8rem" }}>
            <h2>Album Victory Lap</h2>
            <Banner
                img={data.image}
                text={`${data.artist} - ${data.album}`} />
            <div className="container" >
                <TrackList data={data} />
            </div>
        </div>
    )
}

export default ViewAlbum;