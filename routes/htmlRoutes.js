var db = require("../models");
var authorizeUser = require("../config/authorizeUser");
var path = require("path")

module.exports = function(app) {
  // Load index page
  app.get("/home", authorizeUser, function(req, res) {
  
  
      res.sendFile(path.join(__dirname, "../views/eventCreation.html"));
  });
    app.get("/login", function(req, res) {
      console.log(req.user)
      res.sendFile(path.join(__dirname, "../views/login.html"));
  
  });

  app.get("/event/:id",authorizeUser, function(req, res) {

  });
  app.get("/event/create/:id",authorizeUser, function(req, res) {
    res.render("addItems")
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
