import { createContext } from "react";

export const MusicContext = createContext({
    isPlaying: false,
    prevSongId: null,
    currSongId: null,
    nextSongId: null,
    set_song: () => {}
})