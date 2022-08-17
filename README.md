# Tech-Blog-MVC

## Description

This is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This application  was developed following the MVC paradigm in its architectural structure, while using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)

## Installation

1. Download or clone repo
2. Install nodejs https://nodejs.org/en/download/
3. Run npm i in terminal while under the repo directory
4. Create a .env file in the root of this project folder and then add the following to it:
    - DB_NAME = 'blog_db'
    - DB_USER = 'an admin username]'
    - DB_PASSWORD = '[that user's password]'
5. In the terminal login to msql while in project directory 
    - Run 'source db/schema.sql'
    - Run 'exit' to exit mysql cli
    - Run 'node seeds/index.js'

## Usage

Navigation
* homepage - takes the user to the homepage 
* dashboard - shows all the blog posts, and allows for the creation of new blog posts
* login - allow a user to sign up for an account or sign in to an existing one

Homepage
* Shows posts with title, contents, post creator’s username, and date created for that post and have the option to leave a comment
* Both visitors or users who have an accounts can view all blog posts

Blog page
* Clicking on the title of the blog post on the Homepage will allow both visitors and user with an accout to view comments for that blog post
* Comments show the user and the comment blow 
* If a user is logged in, there will be a section that allows a user to comment on that blog post

Dashboard
* The add button will take a user who is signed in to enter to a form to creaet a new post.
* Click on an existing post will allow the signed in user to modify or delete their post (including comments)

Login
* Allows a user to login to the site and then take them to the homepage (login menu item will change to logout) 

Signup
* Will allow a user to sign up and then take them to the homepage (login menu item will change to logout) 
* A visitor will will be prompted to fill in a username and password 

Logout
* Will signed a user out of the site

Session timer
* If the site is idle for a min the user will be signed out
* NOTE: A user will need to log back in to view their blog posts in dashboard

![screenshot](/assets/images/screenshot.png)

## Live DEMO

[LiveDemo](https://tech-blog-jf.herokuapp.com/)

## Credits

[Nodejs](https://nodejs.org/en/)  
[Expressjs](http://expressjs.com/)
[MySql](https://www.mysql.com/)  
[mysql2](https://www.npmjs.com/package/mysql2)  
[Sequalize](https://sequelize.org/)  
[dotenv](https://www.npmjs.com/package/dotenv)  

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Badges

![Tech-Blog-MVC](https://img.shields.io/github/languages/top/gnimelf/Tech-Blog-MVC)  
![langages](https://img.shields.io/github/languages/count/gnimelf/Tech-Blog-MVC)


