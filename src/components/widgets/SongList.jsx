import React from 'react';
import MusicCard from './MusicCard';

function SongList({ data }) {

    return (
        <div>
            {
                  data? data.map(item => (
					<MusicCard key={item.id} music={item} />
				))
				: 'loading'
            }
        </div>
    )
}
export default SongList;
