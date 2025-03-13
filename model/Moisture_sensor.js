const mongoose = require("mongoose")
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)

const MoistureSensorSchema = new mongoose.Schema({
    deviceID: { type: String },
    threshold: { type: String },
    calibration_value: { type: String },
    last_calibrated: { type: String },
}, {
    timestamps: true, 
})

const MoistureSensor = mongoose.model("Moisture_sensor", MoistureSensorSchema, "moisture_sensors")

module.exports = MoistureSensor
