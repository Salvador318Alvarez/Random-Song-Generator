import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <button className='white'><Link to="/">Back to the Homepage...</Link></button>
        </div>
     );
}
 
export default NotFound;