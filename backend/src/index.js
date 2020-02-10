const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);
const urlDb = 'mongodb+srv://bd_user:bduser@cluster0-02jjc.mongodb.net/week10?retryWrites=true&w=majority'

mongoose.connect(urlDb, {useNewUrlParser : true, useUnifiedTopology: true });


app.listen(3333);

//mongodb+srv://bd_user:bduser@cluster0-02jjc.mongodb.net/week10?retryWrites=true&w=majority