const mongoose = require("mongoose")
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)

const WaterUsageSchema = new mongoose.Schema({
    usage_ID: { type: String },
    water_amount: { type: String },
}, {
    timestamps: true,
})

const WaterUsage = mongoose.model("Water_usage", WaterUsageSchema, "water_usages")

module.exports = WaterUsage
