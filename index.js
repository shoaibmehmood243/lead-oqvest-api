const express = require('express');
const app = express();
const cors = require('cors');
const homeRoute = require('./src/routes/home.route');

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=> {
    res.send('Lead oqvest api working fine...');
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