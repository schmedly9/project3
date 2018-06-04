// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
console.log(k)
// Routes
// =============================================================
module.exports = function(app, project3db) {

  // GET route for getting all of the 2 year degrees
  app.get("/api/associate_majors/", function(req, res) {
    db.findAll({});
      });

  // GET route for getting all of the 4 year degrees
  app.get("api/bachelor_majors/", function(req, res) {
    db.findAll({});
  });
  
  //GET route for getting all of the schools
  app.get("api/schools_table/", function(req,res) {
    db.findall({});
    });

  // GET route for returning schools of a specific category
  app.get("/api/schools_table/category/:category", function(req, res) {
    db.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};
