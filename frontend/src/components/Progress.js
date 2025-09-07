import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import API_BASE_URL from '../config/api';
const Progress = () => {
    const [stats, setStats] = useState({
        easy: 0,
        medium: 0,
        hard: 0
    });

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/progress/stats`);
            setStats(response.data);
        } catch (error) {
            console.error('Error fetching stats:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Your Progress</h1>
                <div className="progress-stats">
                    <div className="stat-card">
                        <h3>Easy Problems</h3>
                        <p>{stats.easy}%</p>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>Completed</div>
                    </div>
                    <div className="stat-card">
                        <h3>Medium Problems</h3>
                        <p>{stats.medium}%</p>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>Completed</div>
                    </div>
                    <div className="stat-card">
                        <h3>Hard Problems</h3>
                        <p>{stats.hard}%</p>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>Completed</div>
                    </div>
                </div>

                <div style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    marginTop: '2rem'
                }}>
                    <h2 style={{ marginBottom: '1rem', color: '#333' }}>Progress Overview</h2>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>
                        Track your learning journey through different difficulty levels.
                        Complete problems to improve your programming skills and advance your career.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Progress;