const mongoose = require('mongoose');

var ResultsSchema = new mongoose.Schema({
    user_id: {type:String},
    username: {type: String},
    result_id: { type: String},
    testname: { type: String },
    right: { type: String, default:'0' },
    wrong: { type: String, default:'0' },
    onquestion: { type: Number, default: 1},
    totalquestions: { type: String, default:'10' },
}, { timestamps: true });

var Results = mongoose.model('results', ResultsSchema);

module.exports = Results;