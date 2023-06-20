const express = require('express');
const cors = require('cors');
const app = express();
const homeRoute = require('./src/routes/home.route');
const puppeteer = require('puppeteer');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: true,
    credentials: true
}));

app.get('/', (req, res)=> {
    (async () => {
        try {
          const browser = await puppeteer.launch({headless: false,
            devtools: true,
            args: [
              '--ignore-certificate-errors',
              '--no-sandbox',
              '--disable-setuid-sandbox',
              '--disable-accelerated-2d-canvas',
              '--disable-gpu'
                  ]});
          const page = await browser.newPage();
      
          await page.goto('https://www.google.com');
          await page.screenshot({ path: 'screenshot.png' });
      
          await browser.close();
          console.log('Screenshot saved successfully.');
          res.send('Lead oqvest api working fine...');
        } catch (error) {
          console.error('An error occurred:', error);
        }
      })();
});

app.use('/form', homeRoute);

app.use((req, res, next)=>{
    const err = new Error("Not found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next)=>{
    if(err.isJoi) err.status = 422;
    return res
    .status(err.status || 500)
    .send({
        error: {
            status : err.status || 500,
            message : err.message
        }
    });
})

app.listen(3000, ()=> {
    console.log('Server listening on port 3000');
})