const nodemailer = require('nodemailer');

const sendEmail = async(subject, html, cb)=> {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shoaibmehmood065@gmail.com',
            pass: 'fdktthzmaghlanwi'
        }
    });
    let mailOptions = {
        from: 'shoaibmehmood065@gmail.com',
        to: 'shoaibmehmood065@gmail.com',
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