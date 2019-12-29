const Roles = require('../models/roles');

module.exports = {
    async store(req, res) {
        let { name } = req.body

        if (!name) return res.send('Dados insuficientes');

        try {
            const findRole = await Roles.findOne({ name });
            if (findRole) return res.send({ error: 'Permissão já cadastrada!' });

            const newRole = await Roles.create(req.body);

            return res.send(newRole);

        } catch (error) {
            return res.send({ error: 'Erro ao cadastrar!' });
        }
    }
};