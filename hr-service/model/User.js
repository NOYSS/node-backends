const mogoose = require('mongoose');
const Schema = mogoose.Schema;

let User = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    }
}, {
    collection: 'users'
})

module.exports = mogoose.model('User', User);