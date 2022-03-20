import React, { useContext, useEffect, useState } from "react";
// import { useSelector } from "react-redux";

import { MusicContext } from "../../context/music-context";
import { ThemeContext } from "../styles/Theme";
import '../styles/Layout.css';

import Navigation from "../widgets/Navigation";
import MobileTopNavigation from "../widgets/MobileTopNavigation";
import Footer from "../widgets/Footer";
// import CurrentPlayingLarge from './CurrentPlayingLarge';
import FooterMusicPlayer from "./FooterMusicPlayer";
import FooterSelectMusic from './FooterSelectMusic';
import BottomNavigationMobile from './BottomNavigationMobile';
// import SideBar from './SideBar';
// import { Skeleton } from "@material-ui/lab";

const Layout = (props) => {
    const [screenSize, setScreenSize] = useState(undefined);
    // const { bannerOpen } = useSelector(state => state.musicReducer);
    const [currMusic, setCurrMusic] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const music = useContext(MusicContext);

    function handleResize() {
        setScreenSize(window.innerWidth);
    }
    const useStyle = useContext(ThemeContext);
    useEffect(() => {
        handleResize();
        setCurrMusic(music.song_id);
        setLoaded(loaded);
        return () => window.removeEventListener("resize", handleResize);
    }, [music.song_id, loaded]);

    return (
        <div style={useStyle.component} className="home-container">
            {
                screenSize <= 970 ?
                    <MobileTopNavigation /> :
                    <Navigation />
            }
            <section className={"home-music-container"}>
                <div className="main-home">
                    {
                        props.children
                    }
                </div>
            </section>
            {
                // bannerOpen
                // &&
                // <section className="current-large-banner">
                //     <CurrentPlayingLarge />
                // </section>
            }
            <React.Fragment>
                {
                    currMusic != null
                        ?
                        <FooterMusicPlayer music={currMusic} />
                        :
                        <FooterSelectMusic />
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
