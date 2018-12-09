const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
//we configure express by calling methods
//not by passing arguments
var app = express(); 
var server = http.createServer(app);
//emitting or listening to events
var io = socketIO(server);

//we can serve static files
//http://localhost:3000/images/kitten.jpg
//root route (root domain URL) is now set to your public dir
app.use(express.static(publicPath));

//register an event listener 
io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});
server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});