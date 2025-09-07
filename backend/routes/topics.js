const express = require('express');
const Topic = require('../models/Topic');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, async (req, res) => {
    try {
        const topics = await Topic.find();
        res.json(topics);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/seed', async (req, res) => {
    try {
        const existingTopics = await Topic.find();
        if (existingTopics.length > 0) {
            return res.json({ message: 'Topics already seeded' });
        }

        const topics = [
            {
                name: 'Algorithms',
                problems: [
                    {
                        name: 'Sorting Algorithms',
                        leetcodeLink: '#',
                        youtubeLink: '#',
                        articleLink: '#',
                        level: 'EASY'
                    },
                    {
                        name: 'Searching Algorithms',
                        leetcodeLink: '#',
                        youtubeLink: '#',
                        articleLink: '#',
                        level: 'EASY'
                    },
                    {
                        name: 'Dynamic Programming',
                        leetcodeLink: '#',
                        youtubeLink: '#',
                        articleLink: '#',
                        level: 'MEDIUM'
                    },
                    {
                        name: 'Greedy Algorithms',
                        leetcodeLink: '#',
                        youtubeLink: '#',
                        articleLink: '#',
                        level: 'MEDIUM'
                    },
                    {
                        name: 'Divide and Conquer',
                        leetcodeLink: '#',
                        youtubeLink: '#',
                        articleLink: '#',
                        level: 'MEDIUM'
                    },
                    {
                        name: 'Backtracking',
                        leetcodeLink: '#',
                        youtubeLink: '#',
                        articleLink: '#',
                        level: 'HARD'
                    }
                ]
            },
            {
                name: 'Data Structures',
                problems: [
                    {
                        name: 'Arrays',
                        leetcodeLink: '#',
                        youtubeLink: '#',
                        articleLink: '#',
                        level: 'EASY'
                    },
                    {
                        name: 'Linked Lists',
                        leetcodeLink: '#',
                        youtubeLink: '#',
                        articleLink: '#',
                        level: 'MEDIUM'
                    },
                    {
                        name: 'Stacks and Queues',
                        leetcodeLink: '#',
                        youtubeLink: '#',
                        articleLink: '#',
                        level: 'MEDIUM'
                    },
                    {
                        name: 'Trees',
                        leetcodeLink: '#',
                        youtubeLink: '#',
                        articleLink: '#',
                        level: 'HARD'
                    }
                ]
            },
            {
                name: 'Databases',
                problems: [
                    {
                        name: 'SQL Basics',
                        leetcodeLink: '#',
                        youtubeLink: '#',
                        articleLink: '#',
                        level: 'EASY'
                    },
                    {
                        name: 'NoSQL Databases',
                        leetcodeLink: '#',
                        youtubeLink: '#',
                        articleLink: '#',
                        level: 'MEDIUM'
                    }
                ]
            },
            {
                name: 'Machine Learning',
                problems: [
                    {
                        name: 'Linear Regression',
                        leetcodeLink: '#',
                        youtubeLink: '#',
                        articleLink: '#',
                        level: 'MEDIUM'
                    },
                    {
                        name: 'Neural Networks',
                        leetcodeLink: '#',
                        youtubeLink: '#',
                        articleLink: '#',
                        level: 'HARD'
                    }
                ]
            },
            {
                name: 'Operating Systems',
                problems: [
                    {
                        name: 'Process Management',
                        leetcodeLink: '#',
                        youtubeLink: '#',
                        articleLink: '#',
                        level: 'MEDIUM'
                    },
                    {
                        name: 'Memory Management',
                        leetcodeLink: '#',
                        youtubeLink: '#',
                        articleLink: '#',
                        level: 'HARD'
                    }
                ]
            },
            {
                name: 'Networks',
                problems: [
                    {
                        name: 'TCP/IP',
                        leetcodeLink: '#',
                        youtubeLink: '#',
                        articleLink: '#',
                        level: 'MEDIUM'
                    },
                    {
                        name: 'HTTP/HTTPS',
                        leetcodeLink: '#',
                        youtubeLink: '#',
                        articleLink: '#',
                        level: 'EASY'
                    }
                ]
            }
        ];

        await Topic.insertMany(topics);
        res.json({ message: 'Topics seeded successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;