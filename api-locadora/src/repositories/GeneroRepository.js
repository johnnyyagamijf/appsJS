const mongoose = require('mongoose');
const Genero = mongoose.model('Genero');

exports.create = async (data) => {
    var genero = new Genero(data);
    return await genero.save();
};

exports.getAll = async () => {
    return await Genero.find({});
}