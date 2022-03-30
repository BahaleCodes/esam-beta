import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { ThemeContext } from "../styles/Theme";
import '../styles/Layout.css';

import { useSong } from "../../hooks/music-hook";
import Navigation from "../widgets/Navigation";
import Footer from "../widgets/Footer";
import CurrentPlayingLarge from './CurrentPlayingLarge';
import FooterMusicPlayer from "./FooterMusicPlayer";
import FooterSelectMusic from './FooterSelectMusic';
import BottomNavigationMobile from './BottomNavigationMobile';
// import SideBar from './SideBar';
// import { Skeleton } from "@material-ui/lab";

const Layout = (props) => {
    const { song_id } = useSong();
    const [screenSize, setScreenSize] = useState(undefined);
    const [ song, setSong ] = useState(null);
    const { playing, bannerOpen } = useSelector(state => state.musicReducer);
    const [currMusic, setCurrMusic] = useState(null);
    const [loaded, setLoaded] = useState(false);

    function handleResize() {
        setScreenSize(window.innerWidth);
    }
    const useStyle = useContext(ThemeContext);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/content/songs/?id=${song_id}`)
            .then((res) => {
                console.log(`SONG ID: ${song_id}`)
                setSong(JSON.parse(JSON.stringify(res)))
            })
            .catch((err) => {
                console.log(err);
            });
        // };
        // getSong();
        // handleResize();
        // setCurrMusic(playing);
        // setLoaded(loaded);
        // return () => window.removeEventListener("resize", handleResize);
    });

    return (
        <div style={useStyle.component} className="home-container">
  
                    <Navigation />

            <section className={"home-music-container"}>
                <div className="main-home">
                    {
                        props.children
                    }
                </div>
            </section>

            {
                bannerOpen
                &&
                <section className="current-large-banner">
                    <CurrentPlayingLarge />
                </section>
            }
            <React.Fragment>
                {
                    song_id
                    ? <h1 style={{color: "white"}}>
                        {song_id}
                    </h1>
                    : 'Nun'
                }
            </React.Fragment>
            <React.Fragment>
                {
                    currMusic
                        ? <FooterMusicPlayer music={currMusic} song_id={song_id}/>
                        : <FooterSelectMusic />
                }
                {
                    screenSize <= 970 && <BottomNavigationMobile />
                }
            </React.Fragment>
            <Footer />
        </div>
    );
}

export default Layout;
