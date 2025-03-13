const accountRoute = require("./accountRoute")
const deviceRoute = require("./deviceRoute")
// const MiddlewareAuth = require("../../middlewares/client/auth")
module.exports = (app) => {
  app.use('/customer/account', accountRoute)
  app.use('/customer/device', deviceRoute)
}
