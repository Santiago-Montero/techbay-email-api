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
    try{
        await transporter.sendMail({
            from: email,
            to: config.email_admin,
            subject: "Contacto desde la Pagina", // Subject line
            html: `<b>Nombre del contacto : ${name}, mail del contacto : ${email}  Texto del contacto : ${text} </b>`,
        });
        await transporter.sendMail({
            from: config.email_admin,
            to: email,
            subject: "Contact TechBay", // Subject line
            html: `<b>Thank for contact with us, we will in touch soon</b>`,
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