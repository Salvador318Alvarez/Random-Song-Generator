import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Add = () => {
   const [title, setTitle] = useState('');
   const [lyrics, setLyrics] = useState('');
   const [number, setNumber] = useState(null);
   const [source, setSource] = useState('Soul Stirring Songs & Hymns');
   const [isPending, setIsPending] = useState(false);
   const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();
    const song = {title, lyrics, source, number };
    
    setIsPending(true);

    fetch('http://localhost:8000/songs', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(song)
    }).then(() => {
        console.log('new blog added');
        setIsPending(false);
        navigate('/Songs');
    })

   }
    return ( 
        <div className="add">
            <h2> Add New Songs </h2>
            <form onSubmit={handleSubmit}>
                
                <label>Song Number:</label>
                <input 
                type="number" 
                required
                value = {number} 
                min="1"
                max="500"
                onChange = {(e) => setNumber(e.target.value)}
                />
                
                <label>Song Title:</label>
                <input 
                type="text" 
                required
                value = {title} 
                onChange = {(e) => setTitle(e.target.value)}
                />


                <label>Song Lyrics:</label>
                <textarea 
                required
                value = {lyrics} 
                onChange = {(e) => setLyrics(e.target.value)}>

                </textarea>

                <label>Song Source:</label>
                <select
                value = {source} 
                onChange = {(e) => setSource(e.target.value)}
                >
                    <option value="Soul Stirring Songs & Hymns">Soul Stirring Songs & Hymns</option>
                    <option value="Other">Other</option>
                </select>

                {!isPending && <button>Add Song</button>}
                {isPending && <button disabled>Adding song...</button>}
            </form>
        </div>
     );
}
 
export default Add;