const {User} = require('../models')

const userData = [{
    user_name: 'justin',
    password: 'password',
}]

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
})

module.exports = seedUser;