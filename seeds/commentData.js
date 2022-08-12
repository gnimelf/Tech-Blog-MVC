const {Comment} = require('../models');

const commentData = [
  {
    description: 'reply 1',
    date: '8/9/2022',
    blog_id: 1,
    user_id: 1,
  },
  {
    title: 'Test 1',
    description: 'reply 1',
    date: '8/9/2022',
    blog_id: 2,
    user_id: 1
  },
  {
    title: 'Test 2',
    description: 'reply 1',
    date: '8/9/2022',
    blog_id: 3,
    user_id: 1
  },
  {
    title: 'Test 1',
    description: 'This is a test',
    date: '8/9/2022',
    blog_id: 4,
    user_id: 1
  },
  {
    title: 'Test 2',
    description: 'reply 2',
    date: '8/9/2022',
    blog_id: 1,
    user_id: 1
  },
];

const seedComment = () => Comment.bulkCreate(commentData);


module.exports = seedComment;