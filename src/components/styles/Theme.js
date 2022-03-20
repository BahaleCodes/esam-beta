import React from "react";

export const themes = {
    dark: {
        theme:"black",
        subTheme: "red",
        component:{
            backgroundColor: "black",
            color: "white",
        },
        button:{
            onHover:{
                backgroundColor:"red",
                color:"#fafafa"
            },
            contained:{
                backgroundColor: "red",
                color:"black"
            },
            outlined:{
                backgroundColor:"transparent",
                color:"#fafafa"
            }
        },
        volume:{
            color:"red"
        }
    }
};

export const ThemeContext = React.createContext(
    themes.light
);

/*
export const ThemeProvider = (props) => {
    const [theme,setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={[theme,setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
}*/
