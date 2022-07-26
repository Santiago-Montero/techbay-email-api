const nodemailer = require('nodemailer')
const  config  = require('../config')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: config.email_admin, // generated ethereal user
      pass: config.password_admin, // generated ethereal password
    },
  });
async function sendMail (req, res) {
    const { name, email, text} = req.body
    console.log(req)
    console.log(name)
    console.log(email)
    console.log(text)
    try{
        await transporter.sendMail({
            from: config.email_admin ,
            to: email,
            subject: "Contacto desde la Pagina", // Subject line
            html: `<b>Hi i am ${name} ${text}</b>`,
        });
        console.log('se mando')
        res.sendStatus(200)
    }catch (error){
        console.log(error)
        res.send(error)
    }
}

module.exports = {
    sendMail
}