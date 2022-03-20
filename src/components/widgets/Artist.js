import React from "react";
import { BrowserCard } from "./BrowserCard";

const Artist = (props) => {
    return (
        <div className='col-sm-6 col-md-3 col-lg-3'>
            <BrowserCard
                link={props.link}
                id={props.id}
                title={props.title}
                img={props.img}
                sort={"artist"}
            />
        </div>
    )
}

export default Artist;