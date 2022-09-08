import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';

const SongDetails = () => {
    const { id } = useParams();
    const { data: songs, error, isPending } = useFetch('http://localhost:8000/songs/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/songs/' + songs.id, {
            method: 'DELETE'
        }).then( () => {
            navigate('/Songs');
        })
    }

    return ( 
        <div className="song-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error} </div>}
            { songs && (
                <article>
                    <h2>#{songs.number} - {songs.title}</h2>
                    <p>Taken from "{songs.songBook}"</p>
                    <div>
                        "{songs.lyrics}"
                    </div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default SongDetails;