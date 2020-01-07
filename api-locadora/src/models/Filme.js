const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    nome:{
        type:String,
        required: true,
    },
    genero:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genero'
    }
});

module.exports = mongoose.model('Filme', schema);