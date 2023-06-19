const sendEmail = require("../utilities/email");
const validator = require("email-validator");
const puppeteer = require('puppeteer');

const homeController = {
    purchase: async(req, res, next)=> {
        try {
            const email = req.body.formData.email;
            const full_name = req.body.formData.name;
            const phone = req.body.formData.number;
            const transaction = req.body.formData.homeType;
            const property_type = req.body.formData.propertyType;
            const credit_score = req.body.formData.creditScore;
            const first_purchase = req.body.formData.isFirstPurcase;
            const purchase_stage = req.body.formData.currentSituation;
            const property_usage = req.body.formData.propertyUsed;
            const home_value = req.body.formData.purchasePrice;
            const downpayment_percentage = req.body.formData.downPayment;
            const rate_type = req.body.formData.rateKind;
            const total_annual_income = req.body.formData.householdIncome;
            const employement_status = req.body.formData.employementStatus
            const bankruptcy = req.body.formData.isBankkrupt;
            const income_proof = req.body.formData.incomeProof;
            const realEstate_agent = req.body.formData.agentAssociated
            const zipCode = req.body.formData.zipCode
            const html = `
                <h1>Data entered by: ${email} is following</h1>
                <p>Name: ${req.body.formData.name}</p>
                <p>Email: ${req.body.formData.email}</p>
                <p>Number: ${req.body.formData.number}</p>
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
                <p>Bankruptcy, short sale, or foreclosure in the last 3 years?: ${req.body.formData.isBankkrupt}</p>
                <p>Income Proof: ${req.body.formData.incomeProof}</p>
                <p>Agent Associated: ${req.body.formData.agentAssociated}</p>
            `
            await sendEmail('Account data entered by email:' + email, html, (err, success)=> {
                if(err) {
                    next(err);
                } else {
                    (async () => {
                        const browser = await puppeteer.launch();
                        const page = await browser.newPage();
                        // Navigate to the webpage containing the form
                        await page.goto('https://api.clixlo.com/widget/form/wMbKwQ0BfkLFQQcClrvG', { waitUntil: 'domcontentloaded' });
                       console.log('ok');
                        // Fill in the form fields as Needed
                        await page.type('input[name="full_name"]', String(full_name));
                        await page.type('input[name="phone"]', phone);
                        await page.type('input[name="email"]', String(email));
                        await page.type('input[name="qpMmLQm5DIOG2Ux7PcnB"]', String(transaction));
                        await page.type('input[name="CmdqKuXjIQUNz0Ef1B7J"]', String(property_type));
                        await page.type('input[name="torHEECUN1qlAyUsipKu"]', String(credit_score));
                        await page.type('input[name="eIz7EOmjQrvey8Yc8Yl6"]', String(first_purchase));
                        await page.type('input[name="k7q4iRH1jmPv9jjAvL7e"]', String(purchase_stage));
                        await page.type('input[name="eMy2OcvQcUN0rTNq22Zx"]', String(property_usage));
                        await page.type('input[name="KW1REyBPr6aJAnGnv0Yu"]', String(home_value));
                        await page.type('input[name="9NqRYFP1jMeDNqARqEcp"]', String(downpayment_percentage));
                        await page.type('input[name="OSJ3HwhimgAP0jOAmFz6"]', String(rate_type));
                        await page.type('input[name="3smlXpSpopER87L2V9rQ"]', String(total_annual_income));
                        await page.type('input[name="aLgVGNkHkz9xE9wbmXVH"]', String(employement_status));
                        await page.type('input[name="MJO6lINsXTRE2Mne6awc"]', String(bankruptcy));
                        await page.type('input[name="DZ9qywLxPY1n7Nff5HnI"]', String(income_proof));
                        await page.type('input[name="RZ34IPZhXGA8Z8pxkGXK"]', String(realEstate_agent));
                        await page.type('input[name="hNn06S0mTBWBv4b5xE0N"]', String(zipCode));
                        // Submit the form
                        // Wait for the button to become visible and clickable
                        await page.waitForSelector('button');
                        
                        // Click on the button
                        await page.click('button');
                        console.log('ok');
                        // Wait for navigation to complete
                        await page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 60000 });

            
                        // Close the browser
                        await browser.close();

                        res.status(200).json({
                            message: "Form Submitted Successfully. Email also sent successfully."
                        });
                    })();
                    // res.status(200).send({message: 'Email sent successfully.'});
                }
            })
        } catch (error) {
            next(error);
        }
    },
    refinance: async(req, res, next)=> {
        try {
            const email = req.body.formData.email;
            const full_name = req.body.formData.name;
            const phone = req.body.formData.number;
            const transaction = req.body.formData.homeType;
            const property_type = req.body.formData.propertyType;
            const credit_score = req.body.formData.creditScore;
            const property_usage = req.body.formData.propertyUsed;
            const home_value = req.body.formData.propertyValue;
            const rate_type = req.body.formData.rateKind;
            const total_annual_income = req.body.formData.monthlyincome;
            const employement_status = req.body.formData.employementStatus;
            const bankruptcy = req.body.formData.lastthreeYears;
            const income_proof = req.body.formData.incomeProof;
            const zipCode = req.body.formData.zipCode;
            const mortgage = req.body.formData;
            const interest_rate = req.body.formData.remainingMortage;
            const second_mortgage = req.body.formData.mortageInterestRate;
            const add_cash = req.body.formData.additionalCash;
            const fha_loan = req.body.formData.fhaLoan;
            const purchasing_year = req.body.formData.purchaseYear;
            const html = `
                <h1>Data entered by: ${email} is following</h1>
                <p>Name: ${req.body.formData.name}</p>
                <p>Email: ${req.body.formData.email}</p>
                <p>Number: ${req.body.formData.number}</p>
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
                    (async () => {
                        const browser = await puppeteer.launch();
                        const page = await browser.newPage();
                        // Navigate to the webpage containing the form
                        await page.goto('https://api.clixlo.com/widget/form/d8K0IpsJGdtuVyErO1TR', { waitUntil: 'domcontentloaded' });
                       console.log('ok');
                    
                        // Fill in the form fields as Needed
                        await page.type('input[name="full_name"]', String(full_name));
                        await page.type('input[name="phone"]', phone);
                        await page.type('input[name="email"]', String(email));
                        await page.type('input[name="qpMmLQm5DIOG2Ux7PcnB"]', String(transaction));
                        await page.type('input[name="CmdqKuXjIQUNz0Ef1B7J"]', String(property_type));
                        await page.type('input[name="torHEECUN1qlAyUsipKu"]', String(credit_score));
                        await page.type('input[name="eMy2OcvQcUN0rTNq22Zx"]', String(property_usage));
                        await page.type('input[name="KW1REyBPr6aJAnGnv0Yu"]', String(home_value));
                        await page.type('input[name="OSJ3HwhimgAP0jOAmFz6"]', String(rate_type));
                        await page.type('input[name="3smlXpSpopER87L2V9rQ"]', String(total_annual_income));
                        await page.type('input[name="aLgVGNkHkz9xE9wbmXVH"]', String(employement_status));
                        await page.type('input[name="MJO6lINsXTRE2Mne6awc"]', String(bankruptcy));
                        await page.type('input[name="DZ9qywLxPY1n7Nff5HnI"]', String(income_proof));
                        await page.type('input[name="hNn06S0mTBWBv4b5xE0N"]', String(zipCode));
                        await page.type('input[name="ke9jHqOsNFGrL7xMIwqd"]', String(mortgage));
                        await page.type('input[name="liwo67H5BHQhwzQ6Cr4c"]', String(interest_rate));
                        await page.type('input[name="iS3XKEg0Hhi8W4amOw9s"]', String(second_mortgage));
                        await page.type('input[name="L6lMyRr7u3GFlq1CQU20"]', String(add_cash));
                        await page.type('input[name="kAZsP7vDGqXjewCYV7OB"]', String(fha_loan));
                        await page.type('input[name="PixfrmVegThu1SMyAohb"]', String(purchasing_year));
                        // Submit the form
                        // Wait for the button to become visible and clickable
                        await page.waitForSelector('button');
            
                        // Click on the button
                        await page.click('button');
                       console.log('ok');

            
                        // Wait for navigation to complete
                        await page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 60000 });
            
                        // Close the browser
                        await browser.close();
                        res.status(200).json({
                            message: "Form Submitted Successfully. Email also sent successfully."
                        });
            
            
                    })();
                }
            })
        } catch (error) {
            next(error);
        }
    },
}

module.exports = homeController