import { createContext } from "react";

export const MusicContext = createContext({
    isPlaying: false,
    song_id: null,
    set_song: () => {}
})