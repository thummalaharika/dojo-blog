import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <h1>The Dojo-blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">new blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;