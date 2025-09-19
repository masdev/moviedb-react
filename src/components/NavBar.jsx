import { Link } from "react-router-dom";
import '../css/Navbar.css'

function NavBar() {

    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/moviedb-react" className="navbar-link">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/moviedb-react" className="navbar-link">Home</Link>
            <Link to="/moviedb-react/favorites" className="navbar-link">Favorites</Link>
        </div>
    </nav>
}

export default NavBar;