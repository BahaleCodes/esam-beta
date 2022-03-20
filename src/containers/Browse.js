import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

import '../components/styles/Browse.css';
import Album from "../components/widgets/Album";
import ArtistCard from "../components/widgets/ArtistCard";
// import BrowserMenu from "../components/widgets/BrowserMenu";
import ESAMData from '../db/ESAM.json';

const Albums = (props) => {
    return (
        <React.Fragment>
            {
                props.JsonData.Albums
                    ? props.JsonData.Albums.map((item, i) => (
                        <Album
                            key={i}
                            title={item.album}
                            // id={item.id}
                            img={item.image}
                            sort={"music"}
                            link={`/home/music/browse/${(item.album).replace(' ', '')}`}
                        />
                    ))
                    : 'loading'
            }
        </React.Fragment>
    )
}
const Artists = (props) => {
    return (
        <React.Fragment>
            {
                props.JsonData.Artists
                    ? props.JsonData.Artists.map((item, i) => (
                        <ArtistCard
                            key={i}
                            artist={item.artist}
                            artistId={item.artistId}
                            img={item.img}
                            link={(item.artist).replace(' ', '')}
                        />
                    ))
                    : 'loading...'
            }
        </React.Fragment>
    )
}
const Genres = (props) => {
    return (
        <React.Fragment>
            {
                props.JsonData.Genres
                    ? props.JsonData.Genres.map((item, i) => (
                        <Album
                            key={i}
                            title={item.genre}
                            id={item.id}
                            img={item.img}
                            sort={"genre"}
                            link={`/home/music/browse/genre/${item.album}`}
                        />
                    ))
                    : 'loading...'
            }
        </React.Fragment>
    )
}

const Browse = () => {
    // let { songs } = useSelector(state => state.musicReducer);
    const [JsonData, setData] = useState({});
    const [sort, setSort] = useState("albums");
    useEffect(() => {
        setData(ESAMData);
    }, []);
    return (
        <div className="browse-container text-center" >
            <h2>BROWSE</h2>
            <div className="browser">
                <div className="menu">
                    <input className="menu_input" id="btn2" name="menu" type="radio" onClick={() => { setSort("artists") }} />
                    <label className="menu_label" htmlFor="btn2">
                        <div className="fa fa-user"></div>
                        <div className="menu_text">
                            Artists
                        </div>
                    </label>
                    <input className="menu_input" id="btn3" name="menu" type="radio" onClick={() => { setSort("albums") }} />
                    <label className="menu_label" htmlFor="btn3">
                        <img className="fa" src={'/assets/img/album.svg'} alt="album" />
                        <div className="menu_text">
                            Albums
                        </div>
                    </label>
                    <input className="menu_input" id="btn4" name="menu" type="radio" onClick={() => { setSort("genres") }} />
                    <label className="menu_label" htmlFor="btn4">
                        <div className="fa fa-tag"></div>
                        <div className="menu_text">
                            Genres
                        </div>
                    </label>
                </div>
            </div>
            <div className="container" >
                <div className="main-cnt row music-items" >
                    {sort === "albums" && <Albums JsonData={JsonData} />}
                    {sort === "artists" && <Artists JsonData={JsonData} />}
                    {sort === "genres" && <Genres JsonData={JsonData} />}
                </div>
            </div>
        </div>
    )
}

export default Browse;