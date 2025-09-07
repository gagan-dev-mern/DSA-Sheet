import React from 'react';
import { useAuth } from '../context/AuthContext';
import Navbar from './Navbar';

const Profile = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="profile-container">
                    <div className="profile-info">
                        <h2>Profile Information</h2>
                        <p><strong>Username:</strong> {user?.username}</p>
                        <p><strong>Email:</strong> {user?.email}</p>
                    </div>
                    <button className="btn" onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;