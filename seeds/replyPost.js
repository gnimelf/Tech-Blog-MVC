const { BlogPost, User } = require('../models');

const blogpostdata = [
  {
    description: 'reply 1',
    date: '8/9/2022',
    parent_id: 1
  },
  {
    title: 'Test 1',
    description: 'reply 1',
    date: '8/9/2022',
    parent_id: 2
  },
  {
    title: 'Test 2',
    description: 'reply 1',
    date: '8/9/2022',
    parent_id: 3
  },
  {
    title: 'Test 1',
    description: 'This is a test',
    date: '8/9/2022',
    parent_id: 4
  },
  {
    title: 'Test 2',
    description: 'reply 2',
    date: '8/9/2022',
    parent_id: 1
  },
];

const seedBlogPost = () => BlogPost.bulkCreate(blogpostdata);


module.exports = seedBlogPost;