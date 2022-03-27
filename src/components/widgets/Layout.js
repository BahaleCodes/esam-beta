import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ThemeContext } from "../styles/Theme";
import '../styles/Layout.css';
import { useSong } from "../../hooks/music-hook";
import Navigation from "../widgets/Navigation";
// import MobileTopNavigation from "../widgets/MobileTopNavigation";
import Footer from "../widgets/Footer";
import CurrentPlayingLarge from './CurrentPlayingLarge';
import FooterMusicPlayer from "./FooterMusicPlayer";
import FooterSelectMusic from './FooterSelectMusic';
import BottomNavigationMobile from './BottomNavigationMobile';
import axios from "axios";
// import SideBar from './SideBar';
// import { Skeleton } from "@material-ui/lab";

const Layout = (props) => {
    const { song_id } = useSong();
    const [screenSize, setScreenSize] = useState(undefined);
    const { playing, bannerOpen } = useSelector(state => state.musicReducer);
    const [currSong, setCurrSong] = useState(null);
    const [loaded, setLoaded] = useState(false);

    function handleResize() {
        setScreenSize(window.innerWidth);
    }
    const useStyle = useContext(ThemeContext);
    useEffect(() => {
        const getSong = async () => {
            await axios.get(`http://127.0.0.1:8000/api/content/songs/?id=${song_id}`)
            .then((res) => {
                console.log(`SONG: ${res}`)
                setCurrSong(JSON.parse(JSON.stringify(res)))
            })
            .catch((err) => {
                console.log(err);
            });
        };
        getSong();
        handleResize();
        setLoaded(loaded);
        // return () => window.removeEventListener("resize", handleResize);
    }, [loaded, song_id]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         await axios.get('http://127.0.0.1:8000/api/content/songs/')
    //         .then((res) => {
    //             console.log(res.data);
    //             setData(JSON.parse(JSON.stringify(res.data)))
    //         })
    //         .catch((err => {
    //             console.log(err);
    //         }))
    //     }
    //     fetchData();
    // }, []);
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
                        ? <FooterMusicPlayer music={currSong} />
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
