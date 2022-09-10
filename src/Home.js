import { useState} from 'react';
import List from './List';
import useFetch from './useFetch';

const Home = () => {
    const { data: songs, isPending, error } = useFetch('http://localhost:8000/songs');
    const [firstSong, setFirstSong] = useState("First Song");
    const [secondSong, setSecondSong] = useState("Second Song");
    const [thirdSong, setThirdSong] = useState("Third Song");
    const [fourthSong, setFourthSong] = useState("Fourth Song");

    const randomizer = () => {
        let firstSongNum = Math.floor(Math.random()*songs.length);
        let secondSongNum = Math.floor(Math.random()*songs.length);
        let thirdSongNum = Math.floor(Math.random()*songs.length);
        let fourthSongNum = Math.floor(Math.random()*songs.length);

        // fixing random numbers being the same
        while ((firstSongNum === secondSongNum || 
            firstSongNum === thirdSongNum || 
            firstSongNum === fourthSongNum) || 
            (secondSongNum === thirdSongNum ||
            secondSongNum === fourthSongNum) || 
            (thirdSongNum === fourthSongNum)) 
            { console.log("songs repeated");
            secondSongNum = Math.floor(Math.random()*songs.length);
            thirdSongNum = Math.floor(Math.random()*songs.length);
            fourthSongNum = Math.floor(Math.random()*songs.length);
        }
        
       


        setFirstSong("#" + songs[firstSongNum].number + " " + songs[firstSongNum].title);
        setSecondSong("#" + songs[secondSongNum].number + " " + songs[secondSongNum].title);
        setThirdSong("#" + songs[thirdSongNum].number + " " + songs[thirdSongNum].title);
        setFourthSong("#" + songs[fourthSongNum].number + " " + songs[fourthSongNum].title);
    }

    return (
        <div className="home">
             {isPending && <div>Loading...</div>}
           
            {!isPending && 
            <div className='randomizer'>
                <h2>Randomizer</h2>
                <p>
                   {firstSong}
                </p>
                <p>
                    {secondSong}
                </p>
                <p>
                    {thirdSong}
                </p>
                <p>
                    {fourthSong}
                </p>
                <button onClick={randomizer}>Get Four Random Hymns</button>
            </div>
            }
            
            {error && <div>{error}</div>}
        </div>
    );
}
 
export default Home;