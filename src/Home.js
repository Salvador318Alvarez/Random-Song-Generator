import { useState, useEffect } from 'react';
import List from './List';

const Home = () => {

    const [songs, setSongs] = useState([
        {title:"Jesus, I My Cross Have Taken", songBook:"Soul-Stirring Song & Hymns", id: 1},
        {title:"Glory to His Name", songBook:"Soul-Stirring Song & Hymns", id: 2},
        {title:"Jesus Paid It All", songBook:"Soul-Stirring Song & Hymns",  id: 3},
        {title:"The Way of the Cross", songBook:"Soul-Stirring Song & Hymns", id: 4},
        {title: "When I Survey", songBook:"Soul-Stirring Song & Hymns", id:5},
        {title: "Beneath the Cross of Jesus", songBook:"Soul-Stirring Song & Hymns", id:6},
        {title: "I Gave My Life for Thee", songBook:"Soul-Stirring Song & Hymns", id: 7},
        {title: "I am Coming", songBook:"Soul-Stirring Song & Hymns", id:8},
        {title: "Room at the Cross", songBook:"Soul-Stirring Song & Hymns", id:9},
        {title: "Near the Cross", songBook:"Soul-Stirring Song & Hymns", id:10}
      ]);

    const handleDelete = (id) => {
        const newSongs = songs.filter(song => song.id !== id);
        setSongs(newSongs);
    }

    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <List songs={songs} handleDelete={handleDelete}/>
            <button onClick={reloadPage}>Refresh Page</button>
        </div>
    );
}
 
export default Home;