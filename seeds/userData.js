const { User } = require('../models')

const userdata = [{
    user_name: 'justin',
    email: 'no@no.com',
    password: '12345678',
}]

const seedUser = () => User.bulkCreate(userdata)

module.exports = seedUser;