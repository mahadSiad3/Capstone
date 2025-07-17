import { Link } from "react-router-dom";


function NavBar() {

    return (
        <nav className="nav-bar-container">
            <div className="nav-bar">
                <Link className="nav-bar-link" to='/'>Home</Link>
                <Link className="nav-bar-link" to='/collections'>My Collections</Link>
            </div>
        </nav>

    )
}

export default NavBar