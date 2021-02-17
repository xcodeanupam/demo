const mongoose = require('mongoose');

var AlltestSchema = new mongoose.Schema({
    testname: { type: String, lowercase: true, trim: true },
    test_id: { type: String},
    description: { type: String },
    totalques: { type: String },
    testdone: { type: String },
    testpass: { type: String },
    testfail: { type: String },
    categoryname: { type: String },
    image: {type: String, default:'assets/images/category/native.png'}
}, { timestamps: true });

var Alltest = mongoose.model('alltest', AlltestSchema);

module.exports = Alltest;