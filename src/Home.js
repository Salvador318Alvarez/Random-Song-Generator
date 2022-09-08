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
           
            {!isPending && 
            <div className='randomizer'>
                <h2>Randomizer</h2>
                <p>
                   First song
                </p>
                <p>
                    Second Song
                </p>
                <p>
                    Third Song
                </p>
                <p>
                    Fourth Song
                </p>
                <button>Get Four Random Hymns</button>
            </div>
            }
            
            {error && <div>{error}</div>}
        </div>
    );
}
 
export default Home;