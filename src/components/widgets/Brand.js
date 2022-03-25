import React from "react";
import { Link } from "react-router-dom";

class Brand extends React.Component {
    render() {
        return (
            <div>
                <Link to={"/home"}>
                    <img src={"/assets/img/logo.png"} width={"50px"} alt="" />
                </Link>
            </div>
        );
    }
}

export default Brand;