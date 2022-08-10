const User = require('./User')
const BlogPost = require('./BlogPost')
const ReplyPost = require('./ReplyPost')

User.hasMany(BlogPost, {
  foreignKey: 'user_id',
});

BlogPost.belongsTo(User, {
  foreignKey: 'user_id',
});

BlogPost.hasMany(ReplyPost, {
  foreignKey: 'parent_id'
})

ReplyPost.belongsTo(BlogPost, {
  foreignKey: 'parent_id'
})

module.exports = { User, BlogPost, ReplyPost }