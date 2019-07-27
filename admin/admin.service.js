const adminModel = require('./admin.model');
const adminInit = (username, password, type) => {
    adminModel.find((err, data)=> {
        if(data.length === 0) {
            adminModel.create({'username': username, 'password': password, 'userType': userType}, (err)=> {
                if(err) return('user not found');
            })
        }

    })
}
adminInit('admin', 'admin@456','admin');
module.exports = adminInit;