const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const crypto = require("crypto")
const nodemailer = require("nodemailer")


const app = express()
const port = 8000
const cors = require("cors")
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const jwt = require("jsonwebtoken")


mongoose.connect("mongodb://localhost:27017/ecommerce", { useNewUrlParser: true}).then(() => {
    console.log("DB connected")
}).catch((err) => {

    console.log("DB not connected", err)
})

app.listen(port, () => {
    console.log("Server is running on port", port)
}
)
