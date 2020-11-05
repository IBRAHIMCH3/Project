var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('stockdata.txt', function(err, message) {
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    
    res.write(message);
    res.write('\n\n');
    return res.end();
   
  });
}).listen(8080);