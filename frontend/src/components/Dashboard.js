import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import API_BASE_URL from '../config/api';

const Dashboard = () => {
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
                <h1>Progress Reports</h1>
                <div className="progress-stats">
                    <div className="stat-card">
                        <h3>Easy</h3>
                        <p>{stats.easy}%</p>
                    </div>
                    <div className="stat-card">
                        <h3>Medium</h3>
                        <p>{stats.medium}%</p>
                    </div>
                    <div className="stat-card">
                        <h3>Hard</h3>
                        <p>{stats.hard}%</p>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '2rem', color: '#666' }}>
                    © 2024 Dashboard. All Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default Dashboard;