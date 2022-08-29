const Home = () => {
    
    let song = "Jesus I My Cross";
        
    const handleClick = () => {
        song = "Glory to His Name";
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