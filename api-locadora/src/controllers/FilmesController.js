const repository = require('../repositories/FilmeRepository');
const authService = require('../services/AuthService');
exports.post = async (req, res) => {
    try {
        const data = await authService.tokenIsvalid(token);

        await repository.create({
            nome: req.body.nome,
            genero : req.body.id
        });

        res.status(201).send({
            message: 'Filme cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.get = async (req, res) => {
    const filmes = await repository.getAll();
   console.log(filmes);
    return res.status(200).json(filmes);

}