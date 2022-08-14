// Dependencies
const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const routes = require('./controllers');
const sequelize = require('./config/connection');
const hbs = exphbs.create({});

// Sets up express app
const app = express()
const PORT = process.env.port || 3001

// Setting up handlebars
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