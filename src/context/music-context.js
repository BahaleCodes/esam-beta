import { createContext } from "react";

export const MusicContext = createContext({
    isPlaying: false,
    // prevSongId: null,
    song_id: null,
    // nextSongId: null,
    set_song: () => {}
})