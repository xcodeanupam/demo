const mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
    movie_id: { type: String, defualt: '' },
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
    reviews: { type: String, default: '6340' },
    youtube: { type: String, default:'' },
    release_source: { type: String, default:'' },
    released_on: { type: String, default:'' },
    createDate: { type: String, default: '10 september 2021' },
    casting: [
        {
            name: { type: String, default: '' },
            image: { type: String, default: '' },
            info: { type: String, default: '' },
            other: { type: String, default: '' },
            role: { type: String, default: '' },
        }
    ],
    movietype: { type: String, default:'' },
    section: { type: String, default:'bollywood' },
    seo: [
        {
            title: { type: String, default: '' },
            description: { type: String, default: '' },
            image: { type: String, default: '' },
            slug: { type: String, default: '' },
            keyword: { type: String, default: '' },
            keywords: { type: String, default: '' }
        }
    ],

}, { timestamps: true });

var Movie = mongoose.model('movie', MovieSchema);

module.exports = Movie;
