const sendEmail = require("../utilities/email");

const homeController = {
    purchase: async(req, res, next)=> {
        try {
            const email = req.body.formData.email;
            const html = `
                <h1>Data entered by: ${email} is following</h1>
                <p>Name: ${req.body.formData.name}</p>
                <p>Zip Code: ${req.body.formData.zipCode}</p>
                <p>Home Type: ${req.body.formData.homeType}</p>
                <p>Property Type: ${req.body.formData.propertyType}</p>
                <p>Credit Score: ${req.body.formData.creditScore}</p>
                <p>${req.body.formData.name}'s first purchase: ${req.body.formData.isFirstPurcase}</p>
                <p>Current Situation: ${req.body.formData.currentSituation}</p>
                <p>Property Used: ${req.body.formData.propertyUsed}</p>
                <p>Purchase Price: ${req.body.formData.purchasePrice}</p>
                <p>Down Payment: ${req.body.formData.downPayment}</p>
                <p>Kind of Rate: ${req.body.formData.rateKind}</p>
                <p>Household Income: ${req.body.formData.householdIncome}</p>
                <p>Employement Status: ${req.body.formData.employementStatus}</p>
                <p>Income Proof: ${req.body.formData.incomeProof}</p>
                <p>Agent Associated: ${req.body.formData.agentAssociated}</p>
            `
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
            const email = req.body.formData.email;
            const html = `
                <h1>Data entered by: ${email} is following</h1>
                <p>Name: ${req.body.formData.name}</p>
                <p>Zip Code: ${req.body.formData.zipCode}</p>
                <p>Home Type: ${req.body.formData.homeType}</p>
                <p>Property Type: ${req.body.formData.propertyType}</p>
                <p>Credit Score: ${req.body.formData.creditScore}</p>
                <p>First Purchase Year: ${req.body.formData.purchaseYear}</p>
                <p>Property Value: ${req.body.formData.propertyValue}</p>
                <p>1st Remaining Mortage: ${req.body.formData.remainingMortage}</p>
                <p>Mortage Interest Rate: ${req.body.formData.mortageInterestRate}</p>
                <p>Property Used: ${req.body.formData.propertyUsed}</p>
                <p>Kind of Rate: ${req.body.formData.rateKind}</p>
                <p>Is this 2nd mortage: ${req.body.formData.isSecondMortage}</p>
                <p>Additional Cash: ${req.body.formData.additionalCash}</p>
                <p>Employement Status: ${req.body.formData.employementStatus}</p>
                <p>Bankruptcy, short sale, or foreclosure in the last 3 years?: ${req.body.formData.lastthreeYears}</p>
                <p>Income Proof: ${req.body.formData.incomeProof}</p>
                <p>Monthly Income: ${req.body.formData.monthlyincome}</p>
                <p>FHA Loan: ${req.body.formData.fhaLoan}</p>
            `
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