import { NavLink, Link } from "react-router-dom";
import '../styles/NavBar.scss'

export const Navbar = () => {
    const currentTime = new Date().toLocaleDateString('en-us', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });


    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div>
                    <Link to='/' className="logo">Logo</Link>
                </div>
                <div>
                    <p>{currentTime}</p>
                </div>
            </nav>
        </div>
    )
};