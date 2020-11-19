var http = require('http').createServer(handler)
var io = require('socket.io')(http, {path: '/ws/socket.io'});
var fs = require('fs')
function handler (req, res) {
  fs.readFile(__dirname + '/websocket.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}