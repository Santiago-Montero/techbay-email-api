const express = require("express");
const { sendMail } = require("../controller/mail");


const app = express();


app.get('/', (req,res) => {
    res.send('Bienvenido a la Api de TECHBAY ')
})
app.post('/email', sendMail)

module.exports = {
    app
}