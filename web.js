var express = require('express');
var fs = require('fs');
var infile = "index.html";
var indx = fs.readFileSync(infile);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(indx.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
