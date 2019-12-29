const Users = require('../models/users');


module.exports = {
    async store(req, res) {
        let { email, password } = req.body
        if (!email || !password) return res.send('Dados insuficientes');
    
        try {
            const findUser = await Users.findOne({ email });
            if (findUser) return res.send({ error: 'Usuário já cadastrado!' });
            
            const newUser = await Users.create(req.body);
    
            return res.send({ newUser });
    
        } catch (error) {
            return res.send({ error });
        }
    }
};
