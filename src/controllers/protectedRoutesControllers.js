const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = {
    async index(req, res) {
            return res.send({ message: 'Bem vindo a Rota Protegida!' })
        // console.log(req.headers.auth)
        // console.log(res.locals.auth_data)
    }
}