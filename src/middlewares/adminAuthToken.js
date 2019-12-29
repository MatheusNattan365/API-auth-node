const jwt = require('jsonwebtoken');
const config = require('../config');

const auth = (req, res, next) => {
    const token_header = req.headers.auth;

    if (!token_header) return res.send({ error: 'Usuário não autenticado. Token não enviado' });

    jwt.verify(token_header, config.jwt_secret_key, async (error, decoded) => {
        if (error) return res.send({ error: 'Token inválido' });

        await decoded.roles.map(permission => {
            if(permission.name === 'ADMIN') return next();
        })
        res.json({ error: 'Acesso Negado!' });

        // Passar variaveis via rota
        // res.locals.auth_data = decoded;
        // admin1@admin1.com
        // usuario@user01.com

    })
}

module.exports = auth;