// Dependencies
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Sets up express app
const app = express();
const PORT = process.env.PORT || 3003;

// Set up sessions
const sess = {
    secret: "Super secret secret",
    cookie: {
      maxAge: 100000,
      sameSite: 'strict',
      secure: false,
      httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};
app.use(session(sess));

// Setting up handlebars
const hbs = exphbs.create({});
app.engine("handlebars", hbs.engine); // Define engine
app.set("view engine", "handlebars"); // Set view engine to handle bars

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the public folder for express
app.use(express.static(path.join(__dirname, "public")));

//Use routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
        console.log(`Listening on port http://localhost:${PORT}`)
    );
});
