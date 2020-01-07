const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    descricao:{
        type:String,
        required: true,
    }
});

module.exports = mongoose.model('Genero', schema);