import React, {
    // useEffect,
    useState
} from 'react';
import '../styles/CurrentPlayingLarge.scss';
// import {useSelector} from "react-redux";

function CurrentPlayingLarge() {
    // const {playing} = useSelector(state => state.musicReducer);
    const [ 
        {
            img,
            name,
            author_name
        },
        // setCurrPlaying
    ] = useState();
    // useEffect(()=>{
    //     setCurrPlaying(playing);
    // },[playing]);

    return (
        <div  className={"CurrentPlayingLarge"}>
            <img className={"banner"} src={img} alt=""/>
            <div className="music-left">
                <div className="wrapper">
                    <img className={"music-cover"} src={img} alt=""/>
                    <div className="detail">
                        <h3>{name}</h3>
                        <p>{author_name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentPlayingLarge;