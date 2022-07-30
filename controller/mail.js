const nodemailer = require('nodemailer')
const  config  = require('../config')


async function sendMailTechBay (req, res) {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
        user: config.email_admin, // generated ethereal user
        pass: config.password_admin, // generated ethereal password
        },
    });
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
            html: `<b>Thanks for contacting with us, we will get in touch soon</b>`,
        });
        res.sendStatus(200)
    }catch (error){
        console.log(error)
        res.send(error)
    }
}
async function sendMailMonti (req, res) {
    const transporterMonti = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: config.email_monti, // generated ethereal user
          pass: config.password_monti, // generated ethereal password
        },
    });
    const { name, email, text} = req.body
    try{
        await transporterMonti.sendMail({
            from: email,
            to: config.email_monti,
            subject: "Contacto desde PORTFOLIO", // Subject line
            html: `<b>Nombre del contacto : ${name}, mail del contacto : ${email}  Texto del contacto : ${text} </b>`,
        });
        await transporterMonti.sendMail({
            from: config.email_monti,
            to: email,
            subject: "Contacto Santiago Montero, Desarrollador Full Stack", // Subject line
            html: `<b>Gracias por ponerte en contacto, me comunicare lo antes posible</b>`,
        });
        res.sendStatus(200)
    }catch (error){
        console.log(error)
        res.send(error)
    }
}
module.exports = {
    sendMailTechBay,
    sendMailMonti
}