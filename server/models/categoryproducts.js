const mongoose = require('mongoose');

var CategoryProductSchema = new mongoose.Schema({
    categoryName: {type:String},
    productName: {type: String},
    image: { type: String},
    description: { type: String, default: 1 },
    review: [{
        username: '',
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

var Categoryproducts = mongoose.model('categoryproducts', CategoryProductSchema);

module.exports = Categoryproducts;