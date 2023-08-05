require("dotenv").config()
const { db } = require("./config/database")
const express = require("express")
const app = express()
const cors = require("cors")
const indexRouter = require("./routes/index")

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
)

app.use(express.json())
app.use("/", indexRouter)

// Check for Invalid request // catch 404
app.use(function (req, res, next) {
  res.status(404).json({
    status: 404,
    success: false,
    message: "Not Found",
    data: {},
  })
})

app.listen(3009, (err) => {
  if (err) console.log(err)
  else console.log("server is running on 3009")
})

module.exports = app
