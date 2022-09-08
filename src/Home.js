import { useState, useEffect } from 'react';
import List from './List';
import useFetch from './useFetch';

const Home = () => {
    const { data: songs, isPending, error } = useFetch('http://localhost:8000/songs');


    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <div className="home">
             {isPending && <div>Loading...</div>}
           
            {!isPending && <h2>Homepage</h2>}
            
            {error && <div>{error}</div>}
        </div>
    );
}
 
export default Home;