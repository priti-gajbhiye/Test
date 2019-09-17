const express = require("express");
const app = express.Router();

var reqTime = function (req, res, next) {
  req.reqTime = new Date().toLocaleTimeString();
   next();
 }

 app.use(reqTime);

app.get('/', function (req, res) {
  var resText = 'This is index page<br>'
  resText += '<h2>Requested at: ' + req.reqTime + '</h2>'
   res.send(resText);
 })

 app.get('/details', function (req, res) {
  var resText = 'This is details page!<br>'
  resText += '<h2>Requested at: ' + req.reqTime + '</h2>'
  res.send(resText);
 })


  module.exports = app