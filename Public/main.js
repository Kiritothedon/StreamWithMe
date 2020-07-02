//const { weekdaysShort } = require("moment");
const sendBtn = document.querySelector('#send');
const messages = document.querySelector('#messages');
const messageBox = document.querySelector('#messageBox');
const chatForm = document.getElementById('send');
const socket = io();

const { username,room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});

console.log(username, room);

//message from server
socket.on('message', message => {
    console.log(message);
    outputMessage(message);
    //ModMessage(message);
})

//message submit
$('#send').click(function () {

//get msg text
const message = document.getElementById('messageBox').value;

//Emitting message to server
socket.emit('chatMessage',message);


});



//msg to dom
function outputMessage(message){
    //Creates div
    const div = document.createElement('div');
    div.classList.add('chat');
    //adding html to index
    div.innerHTML = `<p class="meta">${message.username}<span> ${message.text}</span></p>`;
    messages.scrollTop = messages.scrollHeight;
    messageBox.value = '';
    document.getElementById('messages').appendChild(div);
}

function ModMessage(message) {
    messages.textContent += `\n${message.text}`;
    messages.scrollTop = messages.scrollHeight;
    messageBox.value = '';
    return
  }