const repository = require('../repositories/GeneroRepository');

exports.post = async (req, res) => {
    try {
        await repository.create({
            descricao: req.body.descricao,
         });


        res.status(201).send({
            message: 'Genero cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.get = async (req, res) => {
    const generos = await repository.getAll();

    return res.status(200).json(generos);
   
   }