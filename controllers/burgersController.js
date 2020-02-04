var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger_name", "eaten_state"
    ], 
    [req.body.burger_name, res.body.eaten_state], function(result) {
        res.json({id: result.insertId});
    });
})

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.update({
        eaten_state: 1
    }, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        }
        else{
            res.status(200).end();
        }
    });
});

module.exports = router;