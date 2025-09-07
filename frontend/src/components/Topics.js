import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import API_BASE_URL from '../config/api';
const Topics = () => {
    const [topics, setTopics] = useState([]);
    const [expandedTopics, setExpandedTopics] = useState({});
    const [userProgress, setUserProgress] = useState([]);

    useEffect(() => {
        fetchTopics();
        fetchUserProgress();
        seedTopics();
    }, []);

    const seedTopics = async () => {
        try {
            await axios.post(`${API_BASE_URL}/api/topics/seed`);
        } catch (error) {
            console.error('Error seeding topics:', error);
        }
    };

    const fetchTopics = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/topics`);
            setTopics(response.data);
            const expanded = {};
            response.data.forEach((topic, index) => {
                if (index === 0) expanded[topic._id] = true;
            });
            setExpandedTopics(expanded);
        } catch (error) {
            console.error('Error fetching topics:', error);
        }
    };

    const fetchUserProgress = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/progress/user`);
            setUserProgress(response.data);
        } catch (error) {
            console.error('Error fetching user progress:', error);
        }
    };

    const toggleTopic = (topicId) => {
        setExpandedTopics(prev => ({
            ...prev,
            [topicId]: !prev[topicId]
        }));
    };

    const handleCheckboxChange = async (topicId, problemId, isChecked) => {
        try {
            if (isChecked) {
                await axios.post(`${API_BASE_URL}/api/progress/complete`, { topicId, problemId });
            } else {
                await axios.post(`${API_BASE_URL}/api/progress/uncomplete`, { topicId, problemId });
            }
            fetchUserProgress();
        } catch (error) {
            console.error('Error updating progress:', error);
        }
    };

    const isProblemCompleted = (topicId, problemId) => {
        return userProgress.some(
            progress => progress.topicId === topicId && progress.problemId === problemId
        );
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Topics</h1>
                <p style={{ color: '#666', marginBottom: '2rem' }}>Explore these exciting topics!</p>

                <div className="topics-grid">
                    {topics.map((topic) => (
                        <div key={topic._id} className="topic-section">
                            <div
                                className="topic-header"
                                onClick={() => toggleTopic(topic._id)}
                            >
                                <h3>{topic.name}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span className="status-badge">Pending</span>
                                    <span>{expandedTopics[topic._id] ? '▲' : '▼'}</span>
                                </div>
                            </div>

                            {expandedTopics[topic._id] && (
                                <div className="topic-content">
                                    <h4 style={{ padding: '1rem', margin: 0, backgroundColor: '#f8f9fa' }}>Sub Topics</h4>
                                    <table className="subtopics-table">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>LeetCode Link</th>
                                                <th>YouTube Link</th>
                                                <th>Article Link</th>
                                                <th>Level</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {topic.problems.map((problem) => {
                                                const isCompleted = isProblemCompleted(topic._id, problem._id);
                                                return (
                                                    <tr key={problem._id}>
                                                        <td className="checkbox-cell">
                                                            <input
                                                                type="checkbox"
                                                                checked={isCompleted}
                                                                onChange={(e) => handleCheckboxChange(topic._id, problem._id, e.target.checked)}
                                                            />
                                                        </td>
                                                        <td>{problem.name}</td>
                                                        <td>
                                                            <a href={problem.leetcodeLink} className="link-btn" target="_blank" rel="noopener noreferrer">
                                                                Practice
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href={problem.youtubeLink} className="link-btn" target="_blank" rel="noopener noreferrer">
                                                                Watch
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href={problem.articleLink} className="link-btn" target="_blank" rel="noopener noreferrer">
                                                                Read
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <span className={`level-badge level-${problem.level.toLowerCase()}`}>
                                                                {problem.level}
                                                            </span>
                                                        </td>
                                                        <td className={isCompleted ? 'status-done' : 'status-pending'}>
                                                            {isCompleted ? 'Done' : 'Pending'}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Topics;