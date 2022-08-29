import { useState } from 'react';

const Home = () => {
  const [songList, setSongList] = useState([
    {title:"Jesus, I My Cross Have Taken", id: 1},
    {title:"Glory to His Name", id: 2},
    {title:"Jesus Paid It All", id: 3}
  ]);

    return (
        <div>
            {songList.map((song) => (
                <div className="song-preview" key={song.id}>
                    <h2>{song.title}</h2>
                </div>
            ))}
        </div>
    );
}
 
export default Home;