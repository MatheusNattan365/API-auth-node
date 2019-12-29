const express = require('express');
const routes = express.Router();

// Imported controllers
const loginControllers = require('./controllers/loginControllers');
const createUserCrontroller = require('./controllers/createUserControllers');
const createRoleCrontroller = require('./controllers/createRoleControllers');
const protectedRoutesController = require('./controllers/protectedRoutesControllers');
const updateUserRoles = require('./controllers/updateUserRolesControllers');

// Imported middlewares
const authToken = require('./middlewares/authToken');
const adminAuthToken = require('./middlewares/adminAuthToken');


// ------------------------------------ ROUTES 


// ------------------------------------ PUBLIC ROUTES

// Rota para teste
routes.get('/public', (req,res) => {return res.send({message: 'GET root'});});

// Rota de Login de usuários!               -------------------- LOGIN!
routes.post('/login', loginControllers.index);

// Rota de criação de usuários!             -------------------- USER REGISTRATION!
routes.post('/create_user', createUserCrontroller.store);

// --------------------------------------------------------------- //



// ------------------------------------ PRIVATE ROUTES

// Simple auth USER level!                        -------------------- PROTECTED!
routes.get('/protected', authToken, protectedRoutesController.index);

// Simple auth ADMIN level! 
routes.get('/admin', adminAuthToken, (req,res) => { res.json({msg:'Admin Access'})})

// Rota de criação de permissões!             -------------------- ROLE REGISTRATION!
routes.post('/create_role', adminAuthToken, createRoleCrontroller.store);

// Rota de classificar usuário!             -------------------- USER ROLE UPDATING!
routes.put('/update_user_roles',adminAuthToken, updateUserRoles.update);

// --------------------------------------------------------------- //

module.exports = routes;