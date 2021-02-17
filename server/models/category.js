const mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
    categoryname: { type: String, lowercase: true, trim: true },
    category_id: { type: String},
    description: { type: String },
    total: { type: String },
}, { timestamps: true });

var Category = mongoose.model('categorys', CategorySchema);

module.exports = Category;
