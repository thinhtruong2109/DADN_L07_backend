const mongoose = require("mongoose")
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)

const DeviceSchema = new mongoose.Schema({
    deviceID: { type: String },
    userID: { type: String },
    name: { type: String },
    type: { type: String },
    status: { type: String },
    location: { type: String },
    last_updated: { type: String },
}, {
     timestamps: true,
})

const Device = mongoose.model("Device", DeviceSchema, "device")

module.exports = Device
