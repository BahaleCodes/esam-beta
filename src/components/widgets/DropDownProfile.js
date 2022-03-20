import React, {useContext} from "react";
import {AccountBox} from "@material-ui/icons";

import '../styles/DropDownProfile.scss';
import {ThemeContext} from "../styles/Theme";
import HoverButton from "./HoverButton";

const DropDownProfile = () => {
    const useStyle = useContext(ThemeContext);
    return (
        <div style={useStyle.component} className="dropdown-profile">
            <HoverButton Icon={AccountBox} variant={"text"} text={"Profile"}/>
        </div>
    );
}
export default DropDownProfile;