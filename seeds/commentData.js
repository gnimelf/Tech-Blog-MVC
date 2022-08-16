const {Comment} = require('../models');

const commentData = [
  {
    description: "I couldn't agree more!",
    date: '8/9/2022',
    blog_id: 1,
    user_id: 1,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);


module.exports = seedComment;