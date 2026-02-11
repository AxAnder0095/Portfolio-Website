import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import '../styles/NavBar.scss'

export const Navbar = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const currentTime = new Date().toLocaleString('en-us', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                minute: '2-digit',
                hour: '2-digit',
                second: '2-digit',
            });

            setTime(currentTime.toUpperCase());
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div>
                    <Link to='/' className="logo">LOGO</Link>
                </div>
                <div>
                    <p>{time}</p>
                </div>
            </nav>
        </div>
    )
};