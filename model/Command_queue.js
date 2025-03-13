const mongoose = require("mongoose")
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)

const CommandQueueSchema = new mongoose.Schema({
    commandID: { type: String },
    deviceID: { type: String },
    command_type: { type: String },
    status: { type: String },
    retry_count: { type: Number },
}, {
    timestamps: true,
})

const CommandQueue = mongoose.model("Command_queue", CommandQueueSchema, "command_queues")

module.exports = CommandQueue
