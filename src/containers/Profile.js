import React, { useEffect, useState } from 'react';
import { PlaylistPlay } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import Grade from 'grade-js';

import '../components/styles/Profile.css';
import MusicCard from "../components/widgets/MusicCard";
import Container from "../components/widgets/Container";
import SideBarOptions from "../components/widgets/SideBarOptions";

function Profile() {
    const { songs } = useSelector(state => state.musicReducer);
    const [mostPlayed, setMostPlayed] = useState([]);
    useEffect(() => {
        // setMostPlayed(playlists.sort(sortByProperty("timesPlayed")));
        setMostPlayed(songs);
    }, [songs]);
    useEffect(() => {
        Grade(document.querySelectorAll('.gradient-wrap'))
    });
    return (
        <Container>
            <div className={"Profile"}>
                <div className="top-profile">
                    <Avatar variant={"rounded"} src={"/assets/img/avatar2.jpg"}
                        style={{ width: "150px", height: "150px" }}>
                        VS
                    </Avatar>
                    <div className="profile-detail">
                        <h3>Jabbz</h3>
                        <span className={"profile-playlist"}>
                            <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay}
                                href={"/home/playlist/instrumental"} title={"Instrumental"} />
                            <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/electronic"}
                                title={"Electronic"} />
                        </span>
                    </div>
                </div>
                <div className="bottom-profile">
                    <div>
                        <h3>Most Played</h3>
                        <div className="most-played">
                            {
                                mostPlayed?.map((item, index) => (
                                    index <= 5 && <MusicCard key={item.id} music={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Profile;
