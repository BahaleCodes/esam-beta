import React from "react";
import { Link } from "react-router-dom";

import '../styles/ArtistCard.css';

const ArtistCard = (props) => {
    return (
        <div className="artist-card col-3">
            <img className="artist-card-img img-fluid" src={props.img} alt={props.artistId} />
            <Link
                to={{
                    pathname: `/home/artist/${props.link}`,
                    state: {
                        artistId: props.artistId
                    }
                }}>
                <h6 className="artist-name">{props.artist}</h6>
            </Link>
        </div>
    );
}

export default ArtistCard;