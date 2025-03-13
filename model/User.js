const mongoose = require("mongoose")
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)

const UserSchema = new mongoose.Schema({
    userID: { type: String },
    name: { type: String },
    phone_number: { type: String },
    address: { type: String },
    password: { type: String },
    email: { type: String },
    role: { type: String },
}, {
    timestamps: true,
})

const User = mongoose.model('User', UserSchema, 'user')

module.exports = User
