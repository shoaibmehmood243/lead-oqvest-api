const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const homeRoute = require('./src/routes/home.route');
const formRoute = require('./src/routes/form.route');
// Create the proxy middleware
const apiProxy = createProxyMiddleware('/api', {
    target: 'http://209.126.10.187/api',
    changeOrigin: true,
});
  
  // Use the proxy middleware
app.use(apiProxy);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: true,
    credentials: true
}));

app.get('/api', (req, res)=> {
    res.send('Lead oqvest api working');
});

app.use('/api/form', homeRoute);
app.use('/api/v1', formRoute);

app.use((req, res, next)=>{
    const err = new Error("Not found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next)=>{
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