const accountRoute = require("./accountRoute")
const deviceRoute = require("./deviceRoute")
// const MiddlewareAuth = require("../../middlewares/client/auth")
module.exports = (app) => {
  app.use('/api/account', accountRoute)
  app.use('/api/device', deviceRoute)
}
