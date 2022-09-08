import { Link } from 'react-router-dom';

const List = ({songs, handleDelete}) => {

    return ( 
        <div>
            {songs.map((song) => (
                <div className="song-preview" key={song.id}>
                    <Link to={`/song/${song.id}`}> 
                        <h2> #{song.number} - {song.title}</h2>
                        <p> Source: {song.songBook}</p>
                    </Link>
                   
                </div>
            ))}
        </div>
     );
}
 
export default List;