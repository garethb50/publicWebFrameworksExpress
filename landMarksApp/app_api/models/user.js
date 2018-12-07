const mongoose = require('mongoose');
const crypto = require('crypto');
var jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    admin: {
        type: String,
        required: true
    }
});



userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64,
        'sha512').toString('hex');
};


userSchema.methods.validPassword = function (password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64,
        'sha512').toString('hex');
    return this.hash === hash;
};

userSchema.methods.generateJwt = () => {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign({
        _id: this._id,
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        location: this.location,
        admin: this.admin,
        exp: parseInt(expiry.getTime() / 1000),
    }, process.env.JWT_SECRET);
};



module.exports = mongoose.model('user', userSchema);

