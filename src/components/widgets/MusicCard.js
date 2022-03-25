import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import { Skeleton } from "@material-ui/lab";
import Box from "@material-ui/core/Box";

import '../styles/MusicCard.css';
import { increaseTimesPlayed, setCurrentPlaying } from "../../actions/actions";
import Name from "./Name";

function MusicCard(props) {
    const { title, image, artist } = props.music;
    const [isHovered, setHovered] = useState(false);
    function handleResponse() {
        setHovered(!isHovered);
    }
    const dispatch = useDispatch();
    function handlePlay() {
        console.log(props.music);
        dispatch(setCurrentPlaying(props.music))
        dispatch(increaseTimesPlayed(props.music.id));
    }
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true)
    }, []);
    return (
        <div className={"music-card col-3"}>
            {
                !loaded ?
                    <div className={"Skeleton-top"}>
                        <Skeleton variant="rect" width={210} height={210} />
                        <Box pt={0.5}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </div>
                    :
                    <div>
                        <div onClick={handlePlay} className={"music-card-cover"} onMouseOver={handleResponse}>
                            <img src={`http://127.0.0.1:8000/${image}`} alt={title} />
                            <div className="play-circle">
                                <PlayCircleFilledWhiteIcon />
                            </div>
                        </div>
                        <React.Fragment>
                            <Name name={title} className={"song-name"} />
                            <Name name={artist} class="text-sm leading-4 font-medium text-red sm:text-red-500 dark:sm:text-red-400" />
                        </React.Fragment>
                    </div>
            }
        </div>
    );
}

export default MusicCard;