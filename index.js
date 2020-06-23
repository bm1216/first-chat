var app = require('express')(); // function handler that you can supply to http server.
// var http = require('http').createServer(app)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.listen(3000, () => {
  console.log('listening on *:3000');
})