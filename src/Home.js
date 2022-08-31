import { useState, useEffect } from 'react';
import List from './List';

const Home = () => {

    const [songs, setSongs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    const handleDelete = (id) => {
        const newSongs = songs.filter(song => song.id !== id);
        setSongs(newSongs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/songs')
        .then(res => {
            return res.json();
        })
        .then((data) =>{
            setSongs(data);
            setIsPending(false);
        });
        console.log("useEffect ran");
    }, []);

    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <div className="home">
             {isPending && <div>Loading...</div>}
           
            <h2>Homepage</h2>
           
            {songs && <List songs={songs} handleDelete={handleDelete}/>}
            <button onClick={reloadPage}>Refresh Page</button>
        </div>
    );
}
 
export default Home;