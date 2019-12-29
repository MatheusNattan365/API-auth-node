const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const routes = require('./routes');
const app = express();

// Mongoose Configs
mongoose.connect(config.db_connection_string, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', error => console.log('connection error!' + error));
db.once('open', () => { console.log("we're connected") });

// Middlewares Configurations
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/api',routes);

const PORT = config.port || 3001

app.listen(PORT, console.log('rodando na porta', PORT));

