const mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
    title: { type: String },
    titleLink: { type: String },
    productName: { type: String },
    image: { type: String },
    imageTwo: { type: String },
    imageThree: { type: String },
    imageFour: { type: String },
    imageFive: { type: String, defualt: '' },
    imageSix: { type: String, defualt: '' },
    paragraphs: [
        {
            para: { type: String, default: '' },
        }
    ],
    paragraphTwo: [
        {
            para: { type: String, default: '' },
        }
    ],
    paragraphThree: [
        {
            para: { type: String, default: '' },
        }
    ],
    paragraphFour: [
        {
            para: { type: String, default: '' },
        }
    ],
    paragraphFive: [
        {
            para: { type: String, default: '' },
        }
    ],
    comments: [
        {
            comment: { type: String, default: '' },
            username: { type: String, default: '' },
            rating: { type: String, default: '' },
        }
    ],
    productLink: { type: String },
    price: { type: String },
    rating: { type: String, default: '4.5' },
    criticRating: { type: String, default: '4' },
    averageUserRating: { type: String, default: '4' },
    views: { type: String, default: '3440' },
    reviews: { type: String, default: '6340' }

}, { timestamps: true });

var Movie = mongoose.model('movie', MovieSchema);

module.exports = Movie;