require( 'dotenv' ).config()

const express = require("express");
const exphbs = require("express-handlebars");
const routerController = require("./controllers/burgers_controller");

const app = express();
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 8080;

routerController(app)

app.use( express.static('public') )

app.listen(PORT, function() {
    console.log( `Listening on port: ${PORT}` );
})
