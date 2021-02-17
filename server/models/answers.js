const mongoose = require('mongoose');

var AnswersSchema = new mongoose.Schema({
    user_id: {type:String},
    testname: {type: String},
    result_id: { type: String},
    onquestion: { type: Number, default: 1 },
    answer: { type: String },
    correct: { type: String },
}, { timestamps: true });

var Answers = mongoose.model('answers', AnswersSchema);

module.exports = Answers;