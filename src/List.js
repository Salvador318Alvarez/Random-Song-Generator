const List = ({songs, handleDelete}) => {

    return ( 
        <div>
            {songs.map((song) => (
                <div className="song-preview" key={song.id}>
                    <h2> #{song.id} - {song.title}</h2>
                    <p> Source: {song.songBook}</p>
                    <div className="right"><button onClick={() => handleDelete(song.id)}>Delete song</button></div>
                </div>
            ))}
        </div>
     );
}
 
export default List;