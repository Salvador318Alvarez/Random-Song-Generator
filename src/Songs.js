import List from './List';
import useFetch from './useFetch';

const Songs = () => {
    const { data: songs, isPending, error } = useFetch('http://localhost:8000/songs');


    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <div className="home">
             {isPending && <div>Loading...</div>}
           
            {!isPending && <h2>Songs</h2>}
            {error && <div>{error}</div>}
            {songs && <List songs={songs}/>}
            {!isPending && <button onClick={reloadPage}>Refresh Page</button>}
        </div>
    );
}
 
export default Songs;