const express = require('express');
const app = express();
const cors = require('cors');
const homeRoute = require('./src/routes/home.route');

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=> {
    res.send('Lead oqvest api working...');
});

app.use('/form', homeRoute)

app.listen(3000, ()=> {
    console.log('Server listening on port 3000');
})