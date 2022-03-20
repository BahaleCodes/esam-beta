import React from "react";
import { Link } from "react-router-dom";

class Brand extends React.Component {
    render() {
        return (
            <div className="ml-4" >
                <Link to={"/home"}>
                    <img src={"/assets/img/logo.png"} width={"55px"} alt="" />
                </Link>
            </div>
        );
    }
}

export default Brand;