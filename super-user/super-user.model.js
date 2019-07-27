const mongoose = require('mongoose');
const schema = mongoose.Schema;

const superUserModel = mongoose.model('superUser', new schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    usertype: {
        type: String,
        required: true
    }
}, {
    collection: 'superuser'
}));
module.exports = superUserModel;