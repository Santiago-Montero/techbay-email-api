const express = require("express");
const { sendMail } = require("../controller/mail");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.post('/email', sendMail)

module.exports = {
    app
}