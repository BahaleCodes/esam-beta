import React, { useContext, useState } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { Avatar, Button } from "@material-ui/core";
import '../styles/Navigation.scss';
import { ThemeContext } from "../styles/Theme";
import SearchBar from "./SearchBar";
import Brand from "./Brand";
import DropDownProfile from "./DropDownProfile";
import SideBar from "./SideBar";
// import { AuthContext } from '../../context/auth-context';
// import { useAuth } from '../../hooks/auth-hooks';

function Navigation() {
    // const { token, login, userId } = useAuth();
    const [isLanguageListOpen, setLangList] = useState(false);
    const [isOpenProfile, setOpenProfile] = useState(false);

    function handleOpenProfile() {
        if (isLanguageListOpen === true)
            setLangList(!isLanguageListOpen);
        setOpenProfile(!isOpenProfile);
    }
    const useStyle = useContext(ThemeContext);
    return (
        <nav className="fixed-top" style={useStyle.component}>
            <SideBar/>
            <Brand />
            <SearchBar />
            <div className="profile" onClick={handleOpenProfile}>
                <Button className={"Dropdown-btn"}
                    startIcon={
                        <Avatar style={{
                            width: '30px',
                            height: '30px',
                            padding: '18px'
                        }} >Jex</Avatar>}
                    endIcon={
                        isOpenProfile
                            ? <ExpandMoreIcon />
                            : <ExpandLessIcon />
                    }>
                </Button>
                {
                    isOpenProfile &&
                    <DropDownProfile />
                }
            </div>
        </nav>
    );
}

export default Navigation;