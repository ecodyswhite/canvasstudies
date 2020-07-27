const express = require('express')

var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

var server = http.listen(80, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Image Proto running: http://%s:%s", host, port)
});