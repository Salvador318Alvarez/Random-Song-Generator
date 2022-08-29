import { useState } from 'react';

const Home = () => {
    const songs = 
            ["Jesus I My Cross Have Taken", 
            "Glory to His Name", 
            "Jesus Paid It All", 
            "The Way of the Cross Leads Home",
            "When I Survey",
            "Beneath the Cross",
            "I Gave My Life for Thee",
            "At Calvary",
            "Isn't the Love of Jesus",
            "Peace, Peace"];
    // let song = "Jesus I My Cross";
      
    const [song, setSong] = useState('Random Songs Outputted Here');

    const handleClick = () => {
        setSong(songs[Math.floor(Math.random()*10)]);
        console.log(song);
    }


    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <p>{song}</p>
        </div>
    );
}
 
export default Home;