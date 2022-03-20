import React, { useContext, useEffect, useState } from 'react';
// import { useDispatch } from "react-redux";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import { Skeleton } from "@material-ui/lab";
import Box from "@material-ui/core/Box";

import { MusicContext } from '../../context/music-context';
import '../styles/MusicCard.scss';
// import { increaseTimesPlayed, setCurrentPlaying } from "../../actions/actions";
import Name from "./Name";

const base_url = "http://127.0.0.1:8000";

function MusicCard(props) {
    const music = useContext(MusicContext);
    const { title, image, artist, id } = props.music;
    const [isHovered, setHovered] = useState(false);
    function handleResponse() {
        setHovered(!isHovered);
    }
    // const dispatch = useDispatch();
    const handlePlay = async (e) => {
        console.log(props.music);
        e.preventDefault();
        try {
            await music.play_song(id);
        }
        catch (err) { }
        // dispatch(setCurrentPlaying(props.music))
        // dispatch(increaseTimesPlayed(props.music.id));
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
                            <img src={`${base_url}${image}`} alt={title} />
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