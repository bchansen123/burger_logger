var express = require("express");
var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");
app.use(routes);

var PORT = process.env.PORT || 8081;
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);

})