const Device = require('../../model/Device');


module.exports.addDeviceController = async (req, res) => {
    try {
        const {name, type, status, location, last_updated } = req.body;
        
        if (!name || !type || !status || !location) {
            return res.status(400).json({ message: "name, type, status, location là bắt buộc." });
        }


        const lastDeviceResult = await Device.aggregate([
            {
                $project: {
                    numericID: { $toInt: { $substr: ["$deviceID", 1, 10] } }
                }
            },
            { $sort: { numericID: -1 } },
            { $limit: 1 }
        ]);
        
        let newNumber = 1; 
        if (lastDeviceResult.length > 0) {
            newNumber = lastDeviceResult[0].numericID + 1;
        }
        

        const newDeviceID = `D${newNumber.toString().padStart(10, '0')}`;
        

        
        const newDevice = new Device({
            deviceID: newDeviceID,
            userID:-1,
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
