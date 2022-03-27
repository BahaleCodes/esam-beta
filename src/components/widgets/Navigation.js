import React, { 
    // useContext,
    // useState 
} from "react";
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { 
    Avatar, 
    // Button
} from "@material-ui/core";
import '../styles/Navigation.css';
// import { ThemeContext } from "../styles/Theme";
import SearchBar from "./SearchBar";
import Brand from "./Brand";
// import DropDownProfile from "./DropDownProfile";
// import SideBar from "./SideBar";
// import { AuthContext } from '../../context/auth-context';
// import { useAuth } from '../../hooks/auth-hooks';

function Navigation() {
    // const { token, login, userId } = useAuth();
    // const auth =  useContext(AuthContext)
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [isOpenProfile, setOpenProfile] = useState(false);


    // const useStyle = useContext(ThemeContext);
    return (
        <nav className="fixed-top border-b border-red-900" >
           
            <Brand />
            <SearchBar />
            <div className="profile">
               
                <Avatar style={{width: '30px',height: '30px',padding: '18px'}}>Jex</Avatar>
            
               
            </div>
        </nav>
    );
}

export default Navigation;