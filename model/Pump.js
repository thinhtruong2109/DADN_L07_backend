const mongoose = require("mongoose")
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)

const PumpSchema = new mongoose.Schema({
    deviceID: { type: String },
    automode: { type: Boolean , default: false },
    is_running: { type: Boolean , default: false  },
    max_runtime: { type: String },
    last_activated: { type: String },
    flow_rate: { type: String },
}, {
    timestamps: true,
})

const Pump = mongoose.model("Pump", PumpSchema, "pumps")

module.exports = Pump
