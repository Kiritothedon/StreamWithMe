const path = require('path');
const http = require('http')
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages.js');
const app = express();
const server =  http.createServer(app);
const io = socketio(server);
const botName = 'Admin:';
//set static folder
app.use(express.static(path.join(__dirname, 'Public')))

//Run on connect
io.on('connection', socket=> {
//Welcome message
socket.emit('message', formatMessage(botName,'Welcome'));
//Broadcast on connect to all clients except connecting
socket.broadcast.emit('message', formatMessage(botName,'User has Joined the Chat'));

//Broadcast on disconnect
socket.on('disconnect', () => {
  io.emit('message',formatMessage(botName,'A user has left the chat'));
});
//io.emit(''); emits to everyone
socket.on('chatMessage', messageBox => {
  //console.log(messageBox);
  io.emit('message',formatMessage(username, messageBox));
});
});
const PORT = 3000 || process.env.PORT;

//Stop server with ctrl + c
server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
