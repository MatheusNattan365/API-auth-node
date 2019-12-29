const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RolesSchema = new Schema({
    name:{type: String, default: "USER"},
});


module.exports = mongoose.model('Roles', RolesSchema);
// ready to go!