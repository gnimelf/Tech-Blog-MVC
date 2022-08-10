const { BlogPost, User } = require('../models');

const blogpostdata = [
  {
    title: 'Why MVC is so important',
    description: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
    date: '8/9/2022',
    user_id: 1
  },
];

const seedBlogPost = () => BlogPost.bulkCreate(blogpostdata);


module.exports = seedBlogPost;