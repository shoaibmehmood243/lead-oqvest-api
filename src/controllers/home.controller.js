const sendEmail = require("../utilities/email");
const { firefox } = require("playwright");

const homeController = {
    purchase: async (req, res, next) => {
        try {
            const email = req.body.email;
            const full_name = req.body.name;
            const phone = req.body.number;
            const transaction = req.body.homeType;
            const property_type = req.body.propertyType;
            const credit_score = req.body.creditScore;
            const first_purchase = req.body.isFirstPurcase;
            const purchase_stage = req.body.currentSituation;
            const property_usage = req.body.propertyUsed;
            const home_value = req.body.purchasePrice;
            const downpayment_percentage = req.body.downPayment;
            const rate_type = req.body.rateKind;
            const total_annual_income = req.body.householdIncome;
            const employement_status = req.body.employementStatus
            const bankruptcy = req.body.isBankkrupt;
            const income_proof = req.body.incomeProof;
            const realEstate_agent = req.body.agentAssociated
            const zipCode = req.body.zipCode
            const html = `
                <h1>Data entered by: ${email} is following</h1>
                <p>Name: ${req.body.name}</p>
                <p>Email: ${req.body.email}</p>
                <p>Number: ${req.body.number}</p>
                <p>Zip Code: ${req.body.zipCode}</p>
                <p>Home Type: ${req.body.homeType}</p>
                <p>Property Type: ${req.body.propertyType}</p>
                <p>Credit Score: ${req.body.creditScore}</p>
                <p>${req.body.name}'s first purchase: ${req.body.isFirstPurcase}</p>
                <p>Current Situation: ${req.body.currentSituation}</p>
                <p>Property Used: ${req.body.propertyUsed}</p>
                <p>Purchase Price: ${req.body.purchasePrice}</p>
                <p>Down Payment: ${req.body.downPayment}</p>
                <p>Kind of Rate: ${req.body.rateKind}</p>
                <p>Household Income: ${req.body.householdIncome}</p>
                <p>Employement Status: ${req.body.employementStatus}</p>
                <p>Bankruptcy, short sale, or foreclosure in the last 3 years?: ${req.body.isBankkrupt}</p>
                <p>Income Proof: ${req.body.incomeProof}</p>
                <p>Agent Associated: ${req.body.agentAssociated}</p>
            `
            await sendEmail('Account data entered by email:' + email, html, async (err, success) => {
                if (err) {
                    next(err);
                } else {
                    res.status(200).json({
                        message: "Email Sent Successfully."
                    });
                }
            })
        } catch (error) {
            next(error);
        }
    },
    refinance: async (req, res, next) => {
        try {
            const email = req.body.email;
            const full_name = req.body.full_name;
            const phone = req.body.phone;
            const transaction = req.body.transaction;
            const property_type = req.body.property_type;
            const credit_score = req.body.credit_score;
            const property_usage = req.body.property_usage;
            const home_value = req.body.home_value;
            const rate_type = req.body.rate_type;
            const total_annual_income = req.body.total_annual_income;
            const employement_status = req.body.employement_status;
            const bankruptcy = req.body.bankruptcy;
            const income_proof = req.body.income_proof;
            const zipCode = req.body.zipCode;
            const mortgage = req.body.mortgage;
            const interest_rate = req.body.interest_rate;
            const second_mortgage = req.body.second_mortgage;
            const add_cash = req.body.add_cash;
            const fha_loan = req.body.fha_loan;
            const purchasing_year = req.body.purchasing_year;
            const html = `
                <h1>Data entered by: ${email} is following</h1>
                <p>Name: ${full_name}</p>
                <p>Email: ${email}</p>
                <p>Number: ${phone}</p>
                <p>Zip Code: ${zipCode}</p>
                <p>Home Type: ${property_type}</p>
                <p>Property Type: ${property_type}</p>
                <p>Credit Score: ${credit_score}</p>
                <p>First Purchase Year: ${purchasing_year}</p>
                <p>Property Value: ${home_value}</p>
                <p>1st Remaining Mortage: ${mortgage}</p>
                <p>Mortage Interest Rate: ${interest_rate}</p>
                <p>Property Used: ${property_usage}</p>
                <p>Kind of Rate: ${rate_type}</p>
                <p>Is this 2nd mortage: ${second_mortgage}</p>
                <p>Additional Cash: ${add_cash}</p>
                <p>Employement Status: ${employement_status}</p>
                <p>Bankruptcy, short sale, or foreclosure in the last 3 years?: ${bankruptcy}</p>
                <p>Income Proof: ${income_proof}</p>
                <p>Monthly Income: ${total_annual_income}</p>
                <p>FHA Loan: ${fha_loan}</p>
            `
            await sendEmail('Account data entered by email:' + email, html, async (err, success) => {
                if (err) {
                    next(err);
                } else {
                    // try {
                    //     console.log(phone);
                    //     const browser = await firefox.launch();
                    //     const context = await browser.newContext();
                    //     const page = await context.newPage();

                    //     await page.goto('https://api.clixlo.com/widget/form/d8K0IpsJGdtuVyErO1TR');

                    //     await page.fill('input[name="full_name"]', full_name);
                    //     await page.fill('input[name="phone"]', phone.toString());
                    //     await page.fill('input[name="email"]', email);
                    //     await page.fill('input[name="qpMmLQm5DIOG2Ux7PcnB"]', transaction.toString());
                    //     await page.fill('input[name="CmdqKuXjIQUNz0Ef1B7J"]', property_type.toString());
                    //     await page.fill('input[name="torHEECUN1qlAyUsipKu"]', credit_score.toString());
                    //     await page.fill('input[name="eMy2OcvQcUN0rTNq22Zx"]', property_usage.toString());
                    //     await page.fill('input[name="KW1REyBPr6aJAnGnv0Yu"]', home_value.toString());
                    //     await page.fill('input[name="OSJ3HwhimgAP0jOAmFz6"]', rate_type.toString());
                    //     await page.fill('input[name="3smlXpSpopER87L2V9rQ"]', total_annual_income.toString());
                    //     await page.fill('input[name="aLgVGNkHkz9xE9wbmXVH"]', employement_status.toString());
                    //     await page.fill('input[name="MJO6lINsXTRE2Mne6awc"]', bankruptcy.toString());
                    //     await page.fill('input[name="DZ9qywLxPY1n7Nff5HnI"]', income_proof.toString());
                    //     await page.fill('input[name="hNn06S0mTBWBv4b5xE0N"]', zipCode.toString());
                    //     await page.fill('input[name="ke9jHqOsNFGrL7xMIwqd"]', mortgage.toString());
                    //     await page.fill('input[name="liwo67H5BHQhwzQ6Cr4c"]', interest_rate.toString());
                    //     await page.fill('input[name="iS3XKEg0Hhi8W4amOw9s"]', second_mortgage.toString());
                    //     const addCashValue = Number(add_cash) || 0; // Convert add_cash to a number, defaulting to 0 if it's not a valid number
                    //     await page.fill('input[name="L6lMyRr7u3GFlq1CQU20"]', addCashValue.toString());
                    //     await page.fill('input[name="kAZsP7vDGqXjewCYV7OB"]', fha_loan.toString());
                    //     await page.fill('input[name="PixfrmVegThu1SMyAohb"]', purchasing_year.toString());

                    //     await page.click('button[type="submit"]');
                    //     await page.waitForNavigation();

                    //     await browser.close();

                    //     res.status(200).json({
                    //         message: "Form Submitted Successfully & Email sent successfully."
                    //     });
                    // } catch (error) {
                    //     console.error(error);
                    //     res.status(500).json({
                    //         message: "Error occurred during form submission."
                    //     });
                    // }
                    res.status(200).json({
                        message: "Email Sent Successfully."
                    });
                }
            })
        } catch (error) {
            next(error);
        }
    },
}

module.exports = homeController