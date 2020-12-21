var express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

var path = require('path');


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/', express.static(path.join(__dirname, '')));

io.on('connection', (socket) => {
    console.log('Nueva conexión');
});

var port = 2525;

http.listen(port, function(){
    console.log('listening in http://localhost' + port);
});
