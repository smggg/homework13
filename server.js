//MySQL, Node, Express, Handlebars and ORM
// MVC
require( 'dotenv' ).config() // looks for .env ; process.env gets initialized

const express = require("express");
const exphbs = require("express-handlebars");
const routerController = require("./controllers/burgers_controller");

const app = express();
// handlebars initialization
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// for routes
routerController(app)

// for serving media assets
app.use( express.static('public') )

app.listen(PORT, function() {
    console.log( `Listening on port: ${PORT}` );
})

/* --- QUICK WIREFRAME + LAYOUT ----
      ## Title ##

col1                    col2
Burger + Devour Btn    ==> Greyed out Burger (once devoured)

    [ Input Box ] [Submit]

// Steps
// ------
// Build the UI
// Convert it to Handlebars
// Make it functional with arrays
// Convert to more powerful database (jmysql)
//   - burger name
//   - burger id
//   - burger devoured (boolean)
*/