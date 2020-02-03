//Creating connection to mySQL database

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8081,
    user: "root",
    password: "overwatch",
    database: "burgers_db"
});

//Open connection
connection.connect(function(err){
    if(err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID " + connection.threadId)
});

//Exporting connection module for use elsewhere
module.exports = connection;