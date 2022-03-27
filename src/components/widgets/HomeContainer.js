import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../styles/MusicCardContainer.css';
import Banner from "./Banner";
import Slider from "./ContentSlider";
import MusicCard from "./MusicCard";
import Riky from '../../rr.jpg'

const HomeContainer = () => {
    const [homeData, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            await axios.get('http://127.0.0.1:8000/api/content/songs/')
            .then((res) => {
                setData(JSON.parse(JSON.stringify(res.data)))
            })
            .catch((err => {
                console.log(err);
            }))
        }
        fetchData();
    }, []);
    return (
        <div>
            <Banner img={Riky} />

            <div className="container" >
                <Slider title={"Top Songs"}>
                    {
                        homeData
                            ? homeData.map((item) => (
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
