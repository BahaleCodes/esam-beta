import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../styles/Theme";
import '../components/styles/Layout.css';
import MobileTopNavigation from "../components/widgets/MobileTopNavigation";
import Footer from "../components/widgets/Footer";
import { AuthContext } from '../../context/auth-context';
const Layout = (props) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const auth = useContext(AuthContext);
    function handleResize() {
        setScreenSize(window.innerWidth);
    }
    const useStyle = useContext(ThemeContext);
    useEffect(() => {
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div style={useStyle.component}>
            <React.Fragment>
                {
                    screenSize <= 970 && (auth.access_token)
                        ? <MobileTopNavigation />
                        : <></>
                }
                    <section className={"page-container"}>
                        { props.children }
                    </section>
                    <Footer />
            </React.Fragment>
        </div>
    );
}

export default Layout;