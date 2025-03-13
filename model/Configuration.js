const mongoose = require("mongoose")
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)

const ConfigurationSchema = new mongoose.Schema({
    configID: { type: String },
    deviceID: { type: String },
    name: { type: String },
    value: { type: String },
    location: { type: String },
    last_update: { type: String },
}, {
    timestamps: true,
})

const Configuration = mongoose.model("Configuration", ConfigurationSchema, "configurations")

module.exports = Configuration
