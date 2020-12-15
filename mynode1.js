var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, { 'content-Type': 'text/html' });
        res.write(data);
        res.end(" Hello World");
    })


}).listen(8080);

console.log("server is listening to port 8080............");