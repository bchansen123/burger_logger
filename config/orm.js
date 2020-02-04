var connection = require("../config/connection.js");

function paramsPrint(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

var orm = {
    all: function(tableData, cb) {
        var queryParams = "SELECT * FROM " + tableData + ";";
        connection.query(queryParams, function(err,result){
            if(err) throw err;
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        var queryParams = "INSERT INTO " + table;
        queryParams += "(";
        queryParams+= cols.toString();
        queryParams+= ") ";
        queryParams+= "VALUES (";
        queryParams+= paramsPrint(vals.length);
        queryParams+= ") ";

        console.log(queryParams);

        connection.query(queryParams, vals, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    update: function(table, objColVals, condition, cb){
        var queryParams = "UPDATE " + table;
        queryParams+= " SET ";
        queryParams+= objToSql(objColVals);
        queryParams+= " WHERE ";
        queryParams+= condition;

        console.log(queryParams);
        
        connection.query(queryParams, function(err, result){
            if(err) throw err;
            cb(result);
        });
    }
};

function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

module.exports = orm;