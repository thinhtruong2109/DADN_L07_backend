const express = require("express")
const router = express.Router()
const controller = require("../../controller/manager/device_controller")
const middlewareAuth = require("../../middlewares/manager/auth")
router.post("/addDevice",middlewareAuth.requireAuth,controller.addDeviceController)
module.exports = router