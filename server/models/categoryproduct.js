const mongoose = require('mongoose');

var CategoryProductSchema = new mongoose.Schema({
    categoryName: {type:String},
    productName: {type: String},
    image: { type: String},
    allRatings: {type: String, default:'9/10'},
    description: { type: String, default: '' },
    reviews: [{
        userName: '',
        userImage:'',
        review:'',
        rating:''
    }],
    allPros:[
        {
            pros: ''
        },
        {
            pros: ''
        }
    ]
}, { timestamps: true });

var Categoryproduct = mongoose.model('categoryproducts', CategoryProductSchema);

module.exports = Categoryproduct;