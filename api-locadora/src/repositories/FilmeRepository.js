const mongoose = require('mongoose');
const Filme = mongoose.model('Filme');

exports.create = async (data) => {
    var filme = new Filme(data);
    return await filme.save();
};

exports.getAll = async () => {
    const filmes = [];
    return await Filme.find({}).populate('Genero').exec(function (err, f) {
        if (err) return handleError(err);
        else
        console.log(f);
      });
}