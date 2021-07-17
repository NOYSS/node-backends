const mogoose = require('mongoose');
const Schema = mogoose.Schema;

let Role = new Schema({
    code: {
        type: String
    },
    name: {
        type: String
    }
}, {
    collection: 'roles'
})

module.exports = mogoose.model('Role', Role);