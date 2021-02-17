const mongoose = require('mongoose');

var QuestionsSchema = new mongoose.Schema({
    question: { type: String, lowercase: true, trim: true },
    answer: { type: String},
    a: { type: String },
    b: { type: String },
    c: { type: String },
    d: { type: String },
    answer: { type: String },
    question_id: { type: String },
    number: { type: Number, default: 1 },
}, { timestamps: true });

var Questions = mongoose.model('questions', QuestionsSchema);

module.exports = Questions;