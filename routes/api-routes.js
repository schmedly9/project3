// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the 2 year degrees
  app.get("/api/all", function(req, res) {
    db.Major.findAll({}).then(results => {
      res.send(results);
    });
  });

  // GET route for getting all of the 4 year degrees
  app.get("/api/bachelors", function(req, res) {
    db.Major.findAll({ where: { degreetype: "Bachelor" } }).then(data => {
      res.send(data);
    });
  });

  app.get("/api/associate", function(req, res) {
    db.Major.findAll({ where: { degreetype: "Associate" } }).then(data => {
      res.send(data);
    });
  });

  //GET route for getting all of the schools
  app.get("/api/schools_table/", function(req, res) {
    db.findall({});
  });

  // GET route for returning schools of a specific category
  app.get("/api/schools_table/category/:category", function(req, res) {
    db.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
