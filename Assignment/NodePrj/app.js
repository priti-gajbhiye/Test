var express = require('express');
const routes = require("./api");

const app = express();

app.use(routes);

 
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })