import React from "react";

import '../styles/BrowserMenu.css';

const BrowserMenu = (props) => {
    return (
        <div className="browser">
            <div className="menu">
                <input className="menu_input" id="btn2" name="menu" type="radio" onClick={() => {props.onToggle("artists")}} />
                <label className="menu_label" htmlFor="btn2">
                    <div className="fa fa-user"></div>
                    <div className="menu_text">
                        Artist
                    </div>
                </label>
                <input className="menu_input" id="btn3" name="menu" type="radio" />
                <label className="menu_label" htmlFor="btn3">
                    <img className="fa" src={'/assets/img/album.svg'} alt="album" />
                    <div className="menu_text">
                        Album
                    </div>
                </label>
                <input className="menu_input" id="btn4" name="menu" type="radio" /><label className="menu_label" htmlFor="btn4">
                    <div className="fa fa-tag"></div>
                    <div className="menu_text">
                        Genre
                    </div>
                </label>
            </div>
        </div>
    )
}

export default BrowserMenu;