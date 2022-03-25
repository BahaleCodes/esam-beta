import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import { Skeleton } from "@material-ui/lab";
import Box from "@material-ui/core/Box";

import '../styles/MusicCard.scss';
import { increaseTimesPlayed, setCurrentPlaying } from "../../actions/actions";
import Name from "./Name";

import img from "../assets/img/ac.jpg";

function MusicCard(props) {
    const { title, image, artist } = props.music;
    const [isHovered, setHovered] = useState(false);
    function handleResponse() {
        setHovered(!isHovered);
    }
    const dispatch = useDispatch();
    function handlePlay() {
        dispatch(setCurrentPlaying(props.music.song_file))
        dispatch(increaseTimesPlayed(props.music.id));
    }
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true)
    }, []);
    return (
        <div className="music-card col-3">
            {
                !loaded
                    ? <div className={"Skeleton-top"}>
                        <Skeleton variant="rect" width={210} height={210} />
                        <Box pt={0.5}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </div>
                    : <>
                        <div onClick={handlePlay} className={"music-card-cover"} onMouseOver={handleResponse}>
                            {/* <img src={`http://127.0.0.1:8000/media/Logical-Rhymez-ft-A-Reece-God-Save-The-King-scaled-Hip-Hop-More_8B9azh5.jpg`} alt={title} /> */}
                            {/* <img src={require("../assets/img/" + image).default} alt={title} /> */}
                            <img src={img} alt={title} />
                            <div className="play-circle">
                                <PlayCircleFilledWhiteIcon />
                            </div>
                        </div>
                        <React.Fragment>
                            <Name name={title} className={"song-name"} />
                            <Name name={artist} className={"author-name"} />
                        </React.Fragment>
                    </>
            }
        </div>
    );
}

export default MusicCard;
