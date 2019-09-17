const http = require("http");
const url = require("url");
const fs = require('fs');


const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content", "text/html");
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write("File not found");
        } else {
            res.write(data);
            var data = url;
            var url = req.url;

            if (url === '/Monday') {
                res.write('<h1>Monday current time is :<h1>' + new Date().toLocaleTimeString());

            } else if (url === '/Tuesday') {
                res.write('<h1>Tuesday current time is :<h1>' + new Date().toLocaleTimeString());
            }
            else if (url === '/Wednesday') {
                res.write('<h1>Wednesday current time is :<h1>' + new Date().toLocaleTimeString());
            }

            else {
                res.write('<h1>You are in Home Page</h1>')
            }


        }
        res.end();
    })


});

server.listen(port, hostname, () => {
    console.log("Node Server Running at http: @localhost:3000");

});
