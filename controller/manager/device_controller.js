const Device = require('../../model/Device');


module.exports.addDeviceController = async (req, res) => {
    try {
        const { deviceID, userID, name, type, status, location, last_updated } = req.body;
        

        if (!deviceID || !userID || !name || !type) {
            return res.status(400).json({ message: "deviceID, userID, name và type là bắt buộc." });
        }


        const existingDevice = await Device.findOne({ deviceID });
        if (existingDevice) {
            return res.status(400).json({ message: "DeviceID đã tồn tại." });
        }


        const newDevice = new Device({
            deviceID,
            userID,
            name,
            type,
            status,
            location,
            last_updated
        });


        await newDevice.save();

        res.status(201).json({ message: "Device đã được tạo thành công!", device: newDevice });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error: error.message });
    }
};
