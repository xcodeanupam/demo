const mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
    title: { type: String },
    titleLink: {type: String},
    productName: { type: String },
    image: { type: String },
    imageTwo: { type: String },
    imageThree: { type: String },
    imageFour: { type: String },
    imageFive: { type: String, defualt:'' },
    paragraphs: [
        {
            para: { type: String, default: '' },
        }
    ],
    productLink: { type: String },
    price: {type: string},
    views: {type: string, default: '3440'},
    reviews: {type: string, default: '6340'}

}, { timestamps: true });

var Blog = mongoose.model('blogs', BlogSchema);

module.exports = Blog;