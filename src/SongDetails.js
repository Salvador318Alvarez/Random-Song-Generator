import { useParams } from 'react-router-dom';

const SongDetails = () => {
    const { id } = useParams();

    return ( 
        <div className="song-details">
            <h2>Song Details - {id} </h2>
        </div>
     );
}
 
export default SongDetails;