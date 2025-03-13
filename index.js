require('dotenv').config()
const cors = require('cors');
const database = require ("./config/database")
const express = require("express");
// const routeManager = require("./routes/manager/index_route");
const routeClient = require("./routes/client/index_route")
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const app = express()

const port = process.env.PORT;

database.connect(process.env.MONGO_URL)

app.use(cors());


app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))






routeClient(app)
// routeManager(app)


app.listen(port, () => {
  console.log(`website đang chạy localhot: http://localhost:${port}`)
})