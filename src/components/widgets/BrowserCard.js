import React from "react";
import { Link } from "react-router-dom";

import '../styles/BrowserCard.css';

export const BrowserCard = (props) => {
    const height = props.sort === "genre" && "150px" ;
    // : props.sort === "music" ? "250px" : '';
    return (
        <div className='portfolio-item'>
            <div className='hover-bg'>
                {' '}
                <Link
                    to={{
                        pathname: props.link,
                        state: {
                            albumId: props.id,
                            album_art: props.img
                        }
                    }}
                >
                    {
                        props.sort === "music"
                            ? <div
                                style={{
                                    padding: "30% 0 0 0",
                                    height: "100%"
                                }}
                                className='hover-text'>
                                <h4>{props.title}</h4>
                            </div>
                            : props.sort === "genre"
                                ? <div
                                    style={{
                                        padding: "0",
                                        height: "20%",
                                        marginTop: "35%"
                                    }}
                                    className='hover-text'>
                                    <h4>{props.title}</h4>
                                </div>
                                : 'loading...'
                    }
                    <img
                        style={{ height: height }}
                        src={props.img}
                        className='img-responsive'
                        alt={props.title}
                    />{' '}
                </Link>{' '}
            </div>
        </div>
    )
}