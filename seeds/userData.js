const {User} = require('../models')

const userData = [{
    user_name: 'justin',
    password: '12345678',
}]

const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser;