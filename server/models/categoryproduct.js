const mongoose = require('mongoose');

var CategoryProductSchema = new mongoose.Schema({
    categoryName: { type: String },
    productName: { type: String },
    image: { type: String },
    productLink: { type: String },
    allRatings: { type: String, default: '9' },
    description: [
        {
            desc: ''
        }
    ],
    allReviews: { type: String, default: '900' },
    originalPrice: {
        type: String, default: ''
    },
    sellPrice: {
        type: String, default: ''
    },
    productLikes: { type: String, default: '9' },
    productViews: { type: String, default: '90' },
    reviews: [{
        userName: '',
        userImage: { type: String, default: 'https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png'} ,
        review: '',
        rating:{ type: String, default: '5' },
    }],
    allPros: [
        {
            pros: ''
        }
    ]
}, { timestamps: true });

var Categoryproduct = mongoose.model('categoryproducts', CategoryProductSchema);

module.exports = Categoryproduct;