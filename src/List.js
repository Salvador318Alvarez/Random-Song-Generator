const List = ({songs, handleDelete}) => {

    return ( 
        <div>
            {songs.map((song) => (
                <div className="song-preview" key={song.id}>
                    <h2> #{song.id} - {song.title}</h2>
                    <p> Source: {song.songBook}</p>
                </div>
            ))}
        </div>
     );
}
 
export default List;