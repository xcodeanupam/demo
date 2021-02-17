const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const validator = require('validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid!')
            }
        }

    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        validate(value) {
            if (validator.isEmpty(value)) {
                throw new Error('Please enter your password!')
            }
        }
    },
    name: { type: String },
    salt: { type: String },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date }
},
    {
        timestamps: true
    }
);

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

UserSchema.methods.validPassword = function (password) {
    var password = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.password === password;
};

UserSchema.methods.setPassword = function (password) {
    if (password) {
        this.salt = crypto.randomBytes(16).toString('hex');
        this.password = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    }
};

UserSchema.methods.generateJWT = function () {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        id: this._id,
        email: this.email,
        exp: parseInt(exp.getTime() / 1000),
    }, process.env.JWT_SECRET);
};

UserSchema.methods.toAuthJSON = function () {
    return {
        _id: this._id,
        email: this.email,
        name: this.name,
        token: this.generateJWT(),
        createdAt: this.createdAt,
    };
};

const User = mongoose.model('users', UserSchema);

module.exports = User;