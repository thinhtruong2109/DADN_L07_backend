const mongoose = require("mongoose")
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)

const Dht20RecordSchema = new mongoose.Schema({
    dht20_recordID: { type: String },
    deviceID: { type: String },
    humidity: { type: String },
    temperature: { type: Number }, 
}, {
     timestamps: true,
})

const Dht20Record = mongoose.model("Dht20_record", Dht20RecordSchema, "dht20_records")

module.exports = Dht20Record
