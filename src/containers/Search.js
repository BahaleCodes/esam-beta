import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

import '../components/styles/Search.css';
import Container from "../components/widgets/Container";
import MusicCard from "../components/widgets/MusicCard";

const Search = () => {
    const { playlists, search } = useSelector(state => state.musicReducer);
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setSearchResult(playlists.filter((i) => (
            (i.name.toLowerCase().startsWith(search))
            ||
            (i.author_name.toLowerCase().startsWith(search))
            ||
            (i.musicName.toLowerCase().startsWith(search))
            ||
            (i.lang && i.lang.toLowerCase().startsWith(search))
        )));
    }, [search, playlists]);
    return (
        <Container>
            
            {
                (search === "" || search === null)
                    ?
                    <div className={"Search"}>
                        <div className="Search-img">
                            <img className={"Rotate-img"} src={'/assets/img/searchMusicDisc.svg'} alt="search-music-icon" />
                            <img src={'/assets/img/searchMusicMp3.svg'} alt="search-music-icon" />
                            <img src={'/assets/img/searchMusic.svg'} alt="search-music-icon" />
                            <img className={"Arrow"} src={'/assets/img//left.svg'} alt="" />
                        </div>
                    </div>
                    :
                    <div className={"Search-result"}>
                        {
                            searchResult.length === 0
                                ? <div className={"Search-fallback"}>
                                    No result found.
                                </div>
                                : searchResult.map((item) => (
                                    <MusicCard key={item.id} music={item} />
                                ))
                        }
                    </div>
            }
        </Container>
    );
}

export default Search;