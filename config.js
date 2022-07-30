require('dotenv').config()

module.exports = {
    email_admin: process.env.EMAIL_ADMIN,
    password_admin:  process.env.PASSWORD_ADMIN,
    email_monti: process.env.EMAIL_MONTI,
    password_monti:  process.env.PASSWORD_MONTI,
    PORT : process.env.PORT
}