// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/index.html"));
  });

  app.get("/pastEvents", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/pastEvents.html"));
  });
  // currentEvents route loads currentEvents.html
  app.get("/currentEvents", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/currentEvents.html"));
  });

  // upcomingEvents route loads upcomingEvents.html
  app.get("/upcomingEvents", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/upcomingEvents.html"));
  });

  // contact route loads contact.html
  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/contact.html"));
  });

  // about route loads about.html
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/about.html"));
  });


};