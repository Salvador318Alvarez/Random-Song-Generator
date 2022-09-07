import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Song Randomizer</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/songs">Songs</Link>
                <Link to="/add">Add</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;