const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
    name: String,
    leetcodeLink: String,
    youtubeLink: String,
    articleLink: String,
    level: {
        type: String,
        enum: ['EASY', 'MEDIUM', 'HARD']
    }
});

const TopicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Done'],
        default: 'Pending'
    },
    problems: [ProblemSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Topic', TopicSchema);