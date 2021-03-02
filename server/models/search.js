const mongoose = require('mongoose');

var SearchSchema = new mongoose.Schema({
    name: { type: String },
    link: { type: String },
    image: { type: String },
}, { timestamps: true });

var Search = mongoose.model('searchs', SearchSchema);

module.exports = Search;