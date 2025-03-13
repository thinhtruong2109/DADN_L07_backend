const express = require("express")
const router = express.Router()
const controller = require("../../controller/manager/account_controller")
const middlewareAuth = require("../../middlewares/manager/auth")
router.post("/login", controller.loginController)
router.post("/addUser", middlewareAuth.requireAuth, controller.addUserController)
module.exports = router