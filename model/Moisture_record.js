const mongoose = require("mongoose")
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)

const MoistureRecordSchema = new mongoose.Schema({
    moisture_recordID: { type: String },
    deviceID: { type: String },
    soil_moisture: { type: String },
}, {
    timestamps: true,
})

const MoistureRecord = mongoose.model("Moisture_record", MoistureRecordSchema, "moisture_records")

module.exports = MoistureRecord
