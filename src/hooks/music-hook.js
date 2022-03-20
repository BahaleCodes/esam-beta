import { useState, useCallback, useEffect } from "react";

export const useSong = () => {
    const [ song_id, setSong_Id ] = useState(false);

    const play_song = useCallback((song_id) => {
        setSong_Id(song_id);
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
            play_song(storedData.song_id)
        }
    }, [play_song]);

    return { song_id, play_song };
}