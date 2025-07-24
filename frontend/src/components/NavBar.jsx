import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";


function NavBar() {

    
    const { setUsername } = useContext(UserContext);
    const navigate = useNavigate();
// this resets the global username removing it from local storage allowing another to log in. 
    function handleLogout() {
        setUsername("");
        localStorage.removeItem("username");
        navigate("/login");
    }

//navigation links for each nav bar page. 
    return (
        <nav className="nav-bar-container">
            <div className="nav-bar">
                <Link className="nav-bar-link" to='/home'>Home</Link>
                <Link className="nav-bar-link" to='/collections'>My Collections</Link>
                <Link className="nav-bar-link" to='/recommendations'>Recommendations</Link>
                <Link className="nav-bar-link" to='/' onClick={handleLogout}>Logout</Link>
            </div>
        </nav>

    )
}

export default NavBar