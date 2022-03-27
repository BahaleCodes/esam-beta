import { useState, useCallback, useEffect } from "react";

export const useSong = () => {
    const [ song_id, setSongId ] = useState(false);

    const set_song = useCallback((song_id) => {
        setSongId(song_id);
        localStorage.setItem(
            'userSong',
            JSON.stringify({
                song_id: song_id
            })
        );
    }, []);
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userSong'));
        if (storedData && storedData.song_id) {
            set_song(storedData.song_id)
        }
    }, [set_song]);

    return { song_id, set_song };
}