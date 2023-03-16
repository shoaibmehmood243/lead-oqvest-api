const sendEmail = require("../utilities/email");

const homeController = {
    purchase: async(req, res, next)=> {
        try {
            const email = req.body.email;
            const html = `<p>${email}</p>`
            await sendEmail('Account data entered by email:' + email, html, (err, success)=> {
                if(err) {
                    next(err);
                } else {
                    res.status(200).send({message: 'Email sent successfully.'});
                }
            })
        } catch (error) {
            next(error);
        }
    },
    refinance: async(req, res, next)=> {
        try {
            const email = req.body.email;
            const html = `<p>${email}</p>`
            await sendEmail('Account data entered by email:' + email, html, (err, success)=> {
                if(err) {
                    next(err);
                } else {
                    res.status(200).send({message: 'Email sent successfully.'});
                }
            })
        } catch (error) {
            next(error);
        }
    },
}

module.exports = homeController