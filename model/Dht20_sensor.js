const mongoose = require("mongoose")
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)

const Dht20SensorSchema = new mongoose.Schema({
    deviceID: { type: String },
    humidity_accurancy: { type: String },
    temperature_range_min: { type: String },
    temperature_range_max: { type: String },
}, {
    timestamps: true,
})

const Dht20Sensor = mongoose.model("Dht20_sensor", Dht20SensorSchema, "dht20_sensors")

module.exports = Dht20Sensor
