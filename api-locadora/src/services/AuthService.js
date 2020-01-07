const jwt = require('jsonwebtoken');

exports.createToken = async (data) => {
    return jwt.sign(data, '', { expiresIn: '1d' });
}

exports.tokenIsvalid = async (token) => {
    return await jwt.verify(token, '');
}

exports.authorize = (req, res, next) => {
     var token = req.body.token || req.headers.authorization.split(' ')[1] || req.query.token || req.headers['x-access-token'];
    console.log(token);
    if (!token) {
        res.status(401).json({
            message: 'Acesso Restrito'
        });
    } else {
        jwt.verify(token, '', function (err, data) {
            if (err) {
                res.status(401).json({
                    message: 'Token Inválido'
                });
            } else {
                next();
            }
        });
    }
};
