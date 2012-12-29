/*A socket.io based websocket server for Secure Websocket connection wss://
   Achin Kulshrestha (achinkul@gmail.com)*/
var fs = require('fs');
var options = {
  key: fs.readFileSync('cert/dan.key'),
  cert: fs.readFileSync('cert/dan.crt')
};
var app = require('https').createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
});
var io = require('socket.io').listen(app);



app.listen(8089);

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
 }); 
  