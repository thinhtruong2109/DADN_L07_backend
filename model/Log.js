const mongoose = require("mongoose")
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)

const LogSchema = new mongoose.Schema({
    logID: { type: String },
    event_type: { type: String },
    description: { type: String },
}, {
    timestamps: true,
})

const Log = mongoose.model("Log", LogSchema, "logs")

module.exports = Log
