const accountRoute = require("./accountRoute")
const deviceRoute = require("./deviceRoute")
const middlewares = require("../../middlewares/manager/auth")
module.exports = (app) => {
  app.use('/manager/account', accountRoute)
  app.use('/manager/device', deviceRoute)
}