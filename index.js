const express = require('express');
const cors = require('cors');
const app = express();
const homeRoute = require('./src/routes/home.route');
const formRoute = require('./src/routes/form.route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: true,
    credentials: true
}));

app.get('/', (req, res)=> {
    res.send('Lead oqvest api working fine...');
});

app.use('/form', homeRoute);
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