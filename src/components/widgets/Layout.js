import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ThemeContext } from "../styles/Theme";
import '../styles/Layout.css';

import Navigation from "../widgets/Navigation";
import MobileTopNavigation from "../widgets/MobileTopNavigation";
import Footer from "../widgets/Footer";
import CurrentPlayingLarge from './CurrentPlayingLarge';
import FooterMusicPlayer from "./FooterMusicPlayer";
import FooterSelectMusic from './FooterSelectMusic';
import BottomNavigationMobile from './BottomNavigationMobile';
// import SideBar from './SideBar';
// import { Skeleton } from "@material-ui/lab";

const Layout = (props) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const { playing, bannerOpen } = useSelector(state => state.musicReducer);
    const [currMusic, setCurrMusic] = useState(null);
    const [loaded, setLoaded] = useState(false);

    function handleResize() {
        setScreenSize(window.innerWidth);
    }
    const useStyle = useContext(ThemeContext);
    useEffect(() => {
        handleResize();
        setCurrMusic(playing);
        setLoaded(loaded);
        return () => window.removeEventListener("resize", handleResize);
    }, [playing, loaded]);

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
                    currMusic
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
