const sendEmail = require("../utilities/email");
const { firefox } = require("playwright");

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
            await sendEmail('Account data entered by email:' + email, html, async(err, success)=> {
                if(err) {
                    next(err);
                } else {
                    try {
                        const browser = await firefox.launch();
                        const context = await browser.newContext();
                        const page = await context.newPage();
            
                        await page.goto('https://api.clixlo.com/widget/form/wMbKwQ0BfkLFQQcClrvG');
            
                        await page.fill('input[name="full_name"]', String(full_name));
                        await page.fill('input[name="phone"]', String(phone));
                        await page.fill('input[name="email"]', String(email));
                        await page.fill('input[name="qpMmLQm5DIOG2Ux7PcnB"]', String(transaction));
                        await page.fill('input[name="CmdqKuXjIQUNz0Ef1B7J"]', String(property_type));
                        await page.fill('input[name="torHEECUN1qlAyUsipKu"]', String(credit_score));
                        await page.fill('input[name="eIz7EOmjQrvey8Yc8Yl6"]', String(first_purchase));
                        await page.fill('input[name="k7q4iRH1jmPv9jjAvL7e"]', String(purchase_stage));
                        await page.fill('input[name="eMy2OcvQcUN0rTNq22Zx"]', String(property_usage));
                        await page.fill('input[name="KW1REyBPr6aJAnGnv0Yu"]', String(home_value));
                        await page.fill('input[name="9NqRYFP1jMeDNqARqEcp"]', String(downpayment_percentage));
                        await page.fill('input[name="OSJ3HwhimgAP0jOAmFz6"]', String(rate_type));
                        await page.fill('input[name="3smlXpSpopER87L2V9rQ"]', String(total_annual_income));
                        await page.fill('input[name="aLgVGNkHkz9xE9wbmXVH"]', String(employement_status));
                        await page.fill('input[name="MJO6lINsXTRE2Mne6awc"]', String(bankruptcy));
                        await page.fill('input[name="DZ9qywLxPY1n7Nff5HnI"]', String(income_proof));
                        await page.fill('input[name="RZ34IPZhXGA8Z8pxkGXK"]', String(realEstate_agent));
                        await page.fill('input[name="hNn06S0mTBWBv4b5xE0N"]', String(zipCode));
            
                        await page.waitForSelector('button');
            
                        await page.click('button[type="submit"]');
                        await page.waitForNavigation();
            
                        await browser.close();
            
                        res.status(200).json({
                            message: "Form Submitted Successfully & Email sent successfully."
                        });
                    } catch (error) {
                        console.error(error);
                        res.status(500).json({
                            message: "Error occurred during form submission."
                        });
                    };
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
            await sendEmail('Account data entered by email:' + email, html, async(err, success)=> {
                if(err) {
                    next(err);
                } else {
                    try {
                        const browser = await firefox.launch();
                        const context = await browser.newContext();
                        const page = await context.newPage();
                  
                        await page.goto('https://api.clixlo.com/widget/form/d8K0IpsJGdtuVyErO1TR');
                  
                        await page.fill('input[name="full_name"]', full_name);
                        await page.fill('input[name="phone"]', phone);
                        await page.fill('input[name="email"]', email);
                        await page.fill('input[name="qpMmLQm5DIOG2Ux7PcnB"]', transaction);
                        await page.fill('input[name="CmdqKuXjIQUNz0Ef1B7J"]', property_type);
                        await page.fill('input[name="torHEECUN1qlAyUsipKu"]', credit_score);
                        await page.fill('input[name="eMy2OcvQcUN0rTNq22Zx"]', property_usage);
                        await page.fill('input[name="KW1REyBPr6aJAnGnv0Yu"]', home_value);
                        await page.fill('input[name="OSJ3HwhimgAP0jOAmFz6"]', rate_type);
                        await page.fill('input[name="3smlXpSpopER87L2V9rQ"]', total_annual_income);
                        await page.fill('input[name="aLgVGNkHkz9xE9wbmXVH"]', employement_status);
                        await page.fill('input[name="MJO6lINsXTRE2Mne6awc"]', bankruptcy);
                        await page.fill('input[name="DZ9qywLxPY1n7Nff5HnI"]', income_proof);
                        await page.fill('input[name="hNn06S0mTBWBv4b5xE0N"]', zipCode);
                        await page.fill('input[name="ke9jHqOsNFGrL7xMIwqd"]', mortgage);
                        await page.fill('input[name="liwo67H5BHQhwzQ6Cr4c"]', interest_rate);
                        await page.fill('input[name="iS3XKEg0Hhi8W4amOw9s"]', second_mortgage);
                        const addCashValue = Number(add_cash) || 0; // Convert add_cash to a number, defaulting to 0 if it's not a valid number
                        await page.fill('input[name="L6lMyRr7u3GFlq1CQU20"]', addCashValue.toString());
                        await page.fill('input[name="kAZsP7vDGqXjewCYV7OB"]', fha_loan);
                        await page.fill('input[name="PixfrmVegThu1SMyAohb"]', purchasing_year);
                  
                        await page.click('button[type="submit"]');
                        await page.waitForNavigation();
                  
                        await browser.close();
                  
                        res.status(200).json({
                          message: "Form Submitted Successfully & Email sent successfully."
                        });
                      } catch (error) {
                        console.error(error);
                        res.status(500).json({
                          message: "Error occurred during form submission."
                        });
                      }
                }
            })
        } catch (error) {
            next(error);
        }
    },
}

module.exports = homeController