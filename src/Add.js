import { useState } from "react";

const Add = () => {
   const [title, setTitle] = useState('');
   const [lyrics, setLyrics] = useState('');
   const [source, setSource] = useState('Soul Stirring Songs & Hymns');

    return ( 
        <div className="add">
            <h2> Add New Songs </h2>
            <form>
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

                <button>Add Song</button>
                <p>{title}</p>
                <p>{lyrics}</p>
                <p>{source}</p>
            </form>
        </div>
     );
}
 
export default Add;