import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import '../styles/MusicCardContainer.scss';
import Banner from "./Banner";
import Slider from "./ContentSlider";
import { AuthContext } from '../../context/auth-context';
// import ArtistCard from "./ArtistCard";
import MusicCard from "./MusicCard";
import Riky from '../../rr.jpg'

const HomeContainer = () => {
    const auth = useContext(AuthContext)
    const [homeData, setData] = useState({ artists: null, topSongs: null });
    
    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${auth.access_token}`,
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }
        const fetchData = async () => {
            const topArtists = await axios.get('http://127.0.0.1:8000/api/user/profiles/', config);
            const topSongs = await axios.get('http://127.0.0.1:8000/api/content/songs/', config)
            setData({ artists: topArtists.data, topSongs: topSongs.data });
            ///This function is being called infinitely
            // console.log(homeData)
        };

        fetchData();
    }, [auth.access_token, homeData]);
    return (
        <div>
            <Banner img={Riky} />
            <div className="container" >
                <Slider title={"Top Songs"}>
                    {
                        homeData.topSongs
                            ? homeData.topSongs.map((item) => (
                                <MusicCard key={item.id} music={item} />
                            ))
                            : "Loading..."
                    }
                </Slider>
            </div>

        </div>
    );
}

export default HomeContainer;
