const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userModel = mongoose.model('user', new schema({
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
    },
    betamount: {
        type: Number,
        default: 0
    }
}, {
    collection: 'user'
}));
module.exports = userModel;