const {Blog} = require('../models');

const blogData = [
  {
    title: 'Why MVC is so important',
    description: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
    date: '8/9/2022',
    user_id: 1
  },
  {
    title: 'Authentication vs. Authorization',
    description: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allows access to the system.',
    date: '8/9/2022',
    user_id: 1
  }
];

const seedBlog = () => Blog.bulkCreate(blogData);


module.exports = seedBlog;