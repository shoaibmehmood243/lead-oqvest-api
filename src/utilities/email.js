const nodemailer = require('nodemailer');

const sendEmail = async(subject, html, cb)=> {
    let transporter = nodemailer.createTransport({
        host: 'smtp.titan.email',
        port: 465,
        secure: true,
        auth: {
            user: 'info@oqvest.com',
            pass: '3lEZ!b7PR1$ss-'
        }
    });
    let mailOptions = {
        from: 'info@oqvest.com',
        to: 'lead@oqvest.com',
        subject: subject,
        html: html
    }
    transporter.sendMail(mailOptions, (err, data)=> {
        if(err) {
            cb(err, undefined);
        } else {
            cb(undefined, data);
        }
    })
}

module.exports = sendEmail;