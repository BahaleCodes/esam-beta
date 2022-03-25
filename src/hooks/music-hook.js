import { useState, useCallback, useEffect } from "react";

export const useSong = () => {
    const [ songId, setSongId ] = useState(false);

    const play_song = useCallback((song_id) => {
        setSongId(song_id);
        localStorage.setItem(
            'userSong',
            JSON.stringify({
                songId: song_id
            })
        );
    }, []);
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userSong'));
        if (storedData && storedData.songId) {
            play_song(storedData.songId)
        }
    }, [play_song]);

    return { songId, play_song };
}