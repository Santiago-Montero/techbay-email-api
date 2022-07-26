const express = require("express");
const { sendMail } = require("../controller/mail");


const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req,res) => {
    res.send('Bienvenido a la Api de TECHBAY ')
})
app.post('/email', sendMail)

module.exports = {
    app
}