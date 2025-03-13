const Device = require('../../model/Device');


module.exports.getAllDevice = async (req, res) => {
    try {
        const devices = await Device.find({
          accountId: res.locals.account.id,
        }).sort({
          updatedAt: 1,
        });
    
        res.json({
          code: "success",
          msg: "Lấy Devices thành công",
          devices,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          code: "error",
          msg: "Đã xảy ra lỗi khi lấy danh sách thiết bị",
        });
      }    
}