const express = require("express");
const { sendMail } = require("../controller/mail");


const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors())

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', (req,res) => {
    res.send('Bienvenido a la Api de TECHBAY ')
})
app.post('/email', sendMail)

module.exports = {
    app
}