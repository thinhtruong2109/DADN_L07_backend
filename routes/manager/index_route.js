const accountRoute = require("./accountRoute")
const middlewares = require("../../middlewares/manager/auth")
module.exports = (app) => {
  app.use(`${systemPrefix.prefixManager}/api`, accountRoute)
}