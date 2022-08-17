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

The home page contains existing blog posts if any have been posted
The navigation, which contains links for:
* homepage - takes the user to the homepage 
* dashboard - shows all the blog posts, and allows for the creation of new blog posts
* login - allow a user to sign up for an account or sign in to an existing one

Homepage
* Both visitors or users who have an accounts can view all blog posts
* Click on the title of the blog post will allow both visitors and user with an accout to view comments for that blog post

Dashboard
* The add button will take a user who is signed in to enter to a form to creaet a new post.
* Click on an existing post will allow the signed in user to modify or delete their post (including comments)

Login
* Allows a user to login to the site

Signup
* Will allow a user to sign up and then take them to the homepage

Logout
* Will signed a user out of the site

Session timer
* If the site is idle for a min the user will be signed out
* NOTE: A user will need to log back in to view their blog posts in dashboard

Other links in the navigation prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created


WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

## DEMO

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


