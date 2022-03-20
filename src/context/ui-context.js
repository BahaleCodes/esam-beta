import { createContext } from "react";

export const AuthContext = createContext({
    visible:false,
    set_visability: () => {}
})
