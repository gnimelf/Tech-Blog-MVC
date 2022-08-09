// Dependencies
const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const hbs = exphbs.create({});

// Sets up express app
const app = express()
const PORT = process.env.port || 3001

// Setting up handlebars
app.engine('handlebars', hbs.engine) // Define engine
app.set('view engine', 'handlebars'); // Set view engine to handle bars
app.use(express.static(path.join(__dirname, 'public'))) // Set public folder
app.use(require('./controllers/blog-routes')) // Set routes

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
})