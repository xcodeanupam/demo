const mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
    categoryname: { type: String, lowercase: true, trim: true },
    category_id: { type: String},
    categorylink: { type: String },
    description: { type: String },
    image: { type: String },
}, { timestamps: true });

var Category = mongoose.model('categorys', CategorySchema);

module.exports = Category;
