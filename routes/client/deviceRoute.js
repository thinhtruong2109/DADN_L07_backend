const express = require("express")
const router = express.Router()
const controller = require("../../controller/client/device_controller")
const middlewares = require("../../middlewares/client/auth")

router.get("/getAll",middlewares.requireAuth,controller.getAllDevice)
router.get("/getDeviceByID",middlewares.requireAuth,controller.getDeviceByID)




module.exports = router