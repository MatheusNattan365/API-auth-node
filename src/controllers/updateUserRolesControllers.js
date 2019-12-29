const Roles = require('../models/roles');
const Users = require('../models/users');

module.exports = {
    async update(req, res) {
        console.log(req.body)
        let { user_id, newRole } = req.body

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