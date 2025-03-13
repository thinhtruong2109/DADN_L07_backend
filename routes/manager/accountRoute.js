const express = require("express")
const router = express.Router()
const controller = require("../../controller/manager/account_controller")
// const middlewares = require("../../middlewares/manager/auth")
router.post("/login", controller.loginController)
module.exports = router