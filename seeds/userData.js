const {User} = require('../models')

const userData = [{
    user_name: 'justin',
    password: '$2b$10$dZSYWO/dMbspGoTZbsYy7.8iI/0AkRAR/mMvODuvip7wGebUh8sIa',
}]

const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser;