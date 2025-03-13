const mongoose = require("mongoose")
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)

const ScheduleSchema = new mongoose.Schema({
    schedule_ID: { type: String },
    // Sử dụng type String để lưu định dạng thời gian, ví dụ "14:30"
    start_time: { 
        type: String,
        // Validator kiểm tra định dạng HH:mm (giờ:phút)
        validate: {
        validator: function(v) {
            return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v)
        },
        message: props => `${props.value} không phải là định dạng thời gian hợp lệ (HH:mm)!`
        }
    },
    end_time: { 
        type: String,
        validate: {
        validator: function(v) {
            return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v)
        },
        message: props => `${props.value} không phải là định dạng thời gian hợp lệ (HH:mm)!`
        }
    },
    is_active: { type: Boolean },
    repeat_days: { type: String },
}, {
    timestamps: true,
})

const Schedule = mongoose.model("Schedule", ScheduleSchema, "schedules")

module.exports = Schedule
