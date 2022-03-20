import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";

import '../styles/FooterPlayer.scss';
import RepeatIcon from '@material-ui/icons/Repeat';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import Slider from "@material-ui/core/Slider";
import { Avatar } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import ControlsToggleButton from "./ControlsToggleButton";
import Name from "./Name";
import { ThemeContext } from "../styles/Theme";
// import { setBannerOpen, setCurrentPlaying } from "../../actions/actions";

function FooterMusicPlayer({ music }) {
    // const [{ id, title, artist, image, song_file }, setCurrTrack] = useState(music);
    let id = music;
    const [ song, setSong ] = useState({
        title: "",
        artist: "",
        image: "",
        song_file: ""
    });
    const [isRepeatClicked, setRepeatClick] = useState(false);
    // const [isPrevClicked, setPrevClicked] = useState(false);
    // const [isNextClicked, setNextClicked] = useState(false);
    const [isPlaying, setPlayPauseClicked] = useState(false);
    const [isVolumeClicked, setVolumeClicked] = useState(false);
    const [volume, setVolume] = useState(50);
    const [seekTime, setSeekTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currTime, setCurrTime] = useState(0);

    const [bannerToggle, setBannerToggle] = useState(false);
    
    const audioElement = useRef();
    // const dispatch = useDispatch();
    // const { playlists } = useSelector(state => state.musicReducer);
    const useStyle = useContext(ThemeContext);
    const pointer = { cursor: "pointer", color: "white" };
    const base_url = "http://127.0.0.1:8000";

    const handleToggle = (type, val) => {
        switch (type) {
            case "repeat":
                setRepeatClick(val);
                break;
            // case "prev":
            //     setPrevClicked(val);
            //     break;
            case "play-pause":
                setPlayPauseClicked(val);
                break;
            // case "next":
            //     setNextClicked(val);
            //     break;
            case "volume":
                setVolumeClicked(val);
                break;
            default:
                break;
        }
    };
    const handleSeekChange = (event, newValue) => {
        audioElement.current.currentTime = (newValue * duration) / 100;
        setSeekTime(newValue)
    };
    const handleVolumeChange = (event, newValue) => {
        setVolume(newValue);
    };
    const handleBannerToggle = () => {
        setBannerToggle(!bannerToggle);
    };
    // useEffect(() => {
    //     dispatch(setBannerOpen(bannerToggle));
    // }, [dispatch, bannerToggle]);
    useEffect(() => {
        isPlaying
            ? audioElement.current.play()
                .then(() => { })
                .catch((e) => { 
                    audioElement.current.pause();
                    audioElement.current.currentTime = 0;
            })
            : audioElement.current.pause();
        audioElement.current.loop = isRepeatClicked;
        audioElement.current.volume = volume / 100;
        audioElement.current.muted = isVolumeClicked;
        audioElement.current.onloadeddata = () => {
            if (audioElement.current != null)
                setDuration(audioElement.current.duration)
        };
        setInterval(() => {
            if (audioElement.current !== null)
                setCurrTime(audioElement.current.currentTime);
        })
    });
    useEffect(() => {
        const getSong = async () => {
			return await axios.get(`http://127.0.0.1:8000/api/content/songs/?id=${id}`)
			.then(res => setSong(JSON.parse(JSON.stringify(res.data))))
		}
		getSong()
    }, [id]);
    useEffect(() => {
        setSeekTime((currTime) / (duration / 100))
    }, [currTime, duration]);
    // useEffect(() => {
    //     audioElement.current.onended = () => {
    //         setNextClicked(true);
    //     };
    // })
    // useEffect(() => {
    //     if (isNextClicked) {
    //         let currTrackId = (id + 1) % playlists.length;
    //         dispatch(setCurrentPlaying(playlists[currTrackId]));
    //         setNextClicked(false);
    //     }
    //     if (isPrevClicked) {
    //         let currTrackId = (id - 1) % playlists.length;
    //         if ((id - 1) < 0) {
    //             currTrackId = playlists.length - 1;
    //         }
    //         dispatch(setCurrentPlaying(playlists[currTrackId]));
    //         setPrevClicked(false);
    //     }
    // }, [dispatch, id, isNextClicked, isPrevClicked, playlists]);
    function formatTime(secs) {
        const t = new Date(1970, 0, 1);
        t.setSeconds(secs);
        let s = t.toTimeString().substr(0, 8);
        if (secs > 86399)
            s = Math.floor((t - Date.parse("1/1/70")) / 3600000) + s.substr(2);
        return s.substring(3);
    }

    return (
        <div style={useStyle.component} className={"footer-player"}>
            <div className="playback">
                {
                    !isNaN(seekTime) &&
                    <Slider style={{ color: "white" }}
                        className={"playback-completed"}
                        value={seekTime} onChange={handleSeekChange} />
                }
            </div>
            <Button
                startIcon={
                    <Avatar variant="square" src={`${base_url}${song.image}`} alt={song.title} />
                }
                onClick={handleBannerToggle}
                className="curr-music-container">
                <div className="curr-music-details">
                    <Name name={song.title} className={"song-name"} />
                    <Name name={song.artist} className={"author-name"} />
                </div>
            </Button>
            <div className="playback-controls">
                <ControlsToggleButton 
                    style={pointer} type={"repeat"}
                    defaultIcon={<RepeatIcon fontSize={"large"} />}
                    changeIcon={<RepeatOneIcon fontSize={"large"} />}
                    onClicked={handleToggle} />
                <ControlsToggleButton style={pointer} type={"prev"}
                    defaultIcon={<SkipPreviousIcon fontSize={"large"} />}
                    changeIcon={<SkipPreviousIcon fontSize={"large"} />}
                    onClicked={handleToggle} />
                <audio ref={audioElement} src={`${base_url}${song.song_file}`} preload={"metadata"} />
                <ControlsToggleButton style={pointer} type={"play-pause"}
                    defaultIcon={<PlayArrowIcon fontSize={"large"} />}
                    changeIcon={<PauseIcon fontSize={"large"} />}
                    onClicked={handleToggle} />
                <ControlsToggleButton style={pointer} type={"next"}
                    defaultIcon={<SkipNextIcon fontSize={"large"} />}
                    changeIcon={<SkipNextIcon fontSize={"large"} />}
                    onClicked={handleToggle} />
            </div>
            <div className="playback-widgets">
                <div className="timer">
                    <p>
                        <span>{formatTime(currTime)}</span>
                        /
                        <span>{formatTime(duration)}</span>
                    </p>
                </div>
                <div className={"slider"}>
                    <Slider style={{ color: "white" }} value={volume} onChange={handleVolumeChange} />
                </div>
                <ControlsToggleButton style={pointer} type={"volume"}
                    defaultIcon={<VolumeUpIcon />}
                    changeIcon={<VolumeOffIcon />}
                    onClicked={handleToggle} />
            </div>
        </div>

    );
}

export default FooterMusicPlayer;