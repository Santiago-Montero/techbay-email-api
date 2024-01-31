const nodemailer = require('nodemailer')
const config = require('../config')


async function sendMailTechBay(req, res) {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: config.email_admin, // generated ethereal user
            pass: config.password_admin, // generated ethereal password
        },
    });
    const { name, email, text } = req.body
    try {
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
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}
async function sendMailMonti(req, res) {
    const transporterMonti = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: config.email_monti, // generated ethereal user
            pass: config.password_monti, // generated ethereal password
        },
    });
    const { name, email, text } = req.body
    console.log(name)
    console.log(email)
    console.log(text)
    try {
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
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}
async function sendMailYiHeQiao(req, res) {
    const transporterYiHeQiao = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: config.email_YiHeQiao, // generated ethereal user
            pass: config.password_YiHeQiao, // generated ethereal password
        },
    });
    const { name, email, text } = req.body
    try {
        await transporterYiHeQiao.sendMail({
            from: email,
            to: config.email_YiHeQiao,
            subject: "Contacto desde la Pagina YiHeQiao", // Subject line
            html: `<b>Nombre del contacto : ${name}, mail del contacto : ${email}  Texto del contacto : ${text} </b>`,
        });
        await transporterYiHeQiao.sendMail({
            from: config.email_YiHeQiao,
            to: email,
            subject: "Contact YiHeQiao", // Subject line
            html: `<p>Thanks for contacting with us, we will get in touch soon</p> <br>
                <b>Matias & Santiago</b> <br>
                   <b> YiHeQiao</b>`,
        });
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}


module.exports = {
    sendMailTechBay,
    sendMailMonti,
    sendMailYiHeQiao
}