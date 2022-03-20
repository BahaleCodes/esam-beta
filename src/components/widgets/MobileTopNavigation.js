import React from "react";

import '../styles/MobTopNav.scss';
import SearchBar from "./SearchBar";
import Brand from "./Brand";

class MobileTopNavigation extends React.Component {
    render() {
        return (
            <nav className="fixed-top mob-top-navigation">
                <Brand />
                <SearchBar />
            </nav>
        );
    }
}

export default MobileTopNavigation;