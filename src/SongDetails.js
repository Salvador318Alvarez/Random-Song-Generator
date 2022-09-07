import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const SongDetails = () => {
    const { id } = useParams();
    const { data: songs, error, isPending } = useFetch('http://localhost:8000/songs/' + id);

    return ( 
        <div className="song-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error} </div>}
            { songs && (
                <article>
                    <h2>{songs.title}</h2>
                    <p>Taken from "{songs.songBook}"</p>
                    <div>
                        "{songs.lyrics}"
                    </div>
                </article>
            )}
        </div>
     );
}
 
export default SongDetails;