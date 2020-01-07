const express = require('express');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./Config');

const app = express();

mongoose.connect(config.connectionstring, {useUnifiedTopology: true, useNewUrlParser : true});

const  Filme = require('../models/Filme');
const Genero = require('../models/Genero');

const filmeRoute = require('../routes/FilmeRoute');
const generoRoute = require('../routes/GeneroRoute');

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

// Habilita o CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/filmes', filmeRoute);
app.use('/generos', generoRoute);

module.exports = app;