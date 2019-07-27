const mongoose = require('mongoose');
const schema = mongoose.Schema;

const adminModel = mongoose.model('admin', new schema({
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
    collection: 'admin_data'
}));
module.exports = adminModel;