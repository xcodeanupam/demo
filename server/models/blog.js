const mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
    title: { type: String },
    titleLink: {type: String},
    productName: { type: String },
    image: { type: String },
    imageTwo: { type: String },
    imageThree: { type: String },
    paragraphs: [
        {
            para: { type: String, default: '' },
        }
    ],
    productLink: { type: String }
}, { timestamps: true });

var Blog = mongoose.model('blogs', BlogSchema);

module.exports = Blog;