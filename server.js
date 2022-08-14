// Dependencies
const path = require('path');
const express = require('express');
const session = require('express-session')
const exphbs = require('express-handlebars')
const routes = require('./controllers');
const sequelize = require('./config/connection');


// Sets up express app
const app = express()
const PORT = process.env.port || 3001

// Set up sessions
const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: true,
  };
app.use(session(sess));


// Setting up handlebars
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine) // Define engine
app.set('view engine', 'handlebars'); // Set view engine to handle bars

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the public folder for express
app.use(express.static(path.join(__dirname, 'public'))) 

//Use routes
app.use(routes)

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`))
})