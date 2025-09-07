import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <nav className="navbar">
            <h1>Dashboard</h1>
            <ul className="nav-links">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/topics">Topics</Link></li>
                <li><Link to="/progress">Progress</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><button className="btn btn-small" onClick={handleLogout}>Logout</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;