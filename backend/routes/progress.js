const express = require('express');
const User = require('../models/User');
const Topic = require('../models/Topic');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/complete', auth, async (req, res) => {
    try {
        const { topicId, problemId } = req.body;
        const userId = req.user.userId;

        const user = await User.findById(userId);

        const existingProgress = user.completedProblems.find(
            p => p.topicId === topicId && p.problemId === problemId
        );

        if (!existingProgress) {
            user.completedProblems.push({
                topicId,
                problemId
            });
            await user.save();
        }

        res.json({ message: 'Progress updated' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/uncomplete', auth, async (req, res) => {
    try {
        const { topicId, problemId } = req.body;
        const userId = req.user.userId;

        const user = await User.findById(userId);

        user.completedProblems = user.completedProblems.filter(
            p => !(p.topicId === topicId && p.problemId === problemId)
        );

        await user.save();

        res.json({ message: 'Progress updated' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/stats', auth, async (req, res) => {
    try {
        const userId = req.user.userId;
        const user = await User.findById(userId).populate('completedProblems');
        const topics = await Topic.find();

        let easyCount = 0, mediumCount = 0, hardCount = 0;
        let easyTotal = 0, mediumTotal = 0, hardTotal = 0;

        topics.forEach(topic => {
            topic.problems.forEach(problem => {
                if (problem.level === 'EASY') easyTotal++;
                else if (problem.level === 'MEDIUM') mediumTotal++;
                else if (problem.level === 'HARD') hardTotal++;

                const isCompleted = user.completedProblems.some(
                    cp => cp.topicId === topic._id.toString() && cp.problemId === problem._id.toString()
                );

                if (isCompleted) {
                    if (problem.level === 'EASY') easyCount++;
                    else if (problem.level === 'MEDIUM') mediumCount++;
                    else if (problem.level === 'HARD') hardCount++;
                }
            });
        });

        res.json({
            easy: Math.round((easyCount / easyTotal) * 100) || 0,
            medium: Math.round((mediumCount / mediumTotal) * 100) || 0,
            hard: Math.round((hardCount / hardTotal) * 100) || 0
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/user', auth, async (req, res) => {
    try {
        const userId = req.user.userId;
        const user = await User.findById(userId);
        res.json(user.completedProblems);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;