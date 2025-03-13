const mongoose = require("mongoose")
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)

const NotificationSchema = new mongoose.Schema({
    notificationID: { type: String },
    severity: { type: String },
    message: { type: String },
    isread: { type: Boolean, default: false },
}, {
    timestamps: true,
})

const Notification = mongoose.model("Notification", NotificationSchema, "notifications")

module.exports = Notification
