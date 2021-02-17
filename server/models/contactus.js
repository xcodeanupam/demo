const mongoose = require('mongoose');

var ContactusSchema = new mongoose.Schema({
    name: { type: String, lowercase: true, trim: true },
    email: { type: String, lowercase: true, trim: true },
    phone: { type: String },
    country: { type: String },
    service: { type: String },
    skill: { type: String },
    message: { type: String, lowercase: true, trim: true },
}, { timestamps: true });

var Contactus = mongoose.model('contactus', ContactusSchema);

module.exports = Contactus;
