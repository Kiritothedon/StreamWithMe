var myId;
// Get the input field
var input = document.getElementById("messageBox");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("send").click();
  }
});
(function() {
            const sendBtn = document.querySelector('#send');
            const messages = document.querySelector('#messages');
            const messageBox = document.querySelector('#messageBox');
        
            let ws;
        
            function showMessage(message) {
              messages.textContent += `\n\n${message}`;
              messages.scrollTop = messages.scrollHeight;
              messageBox.value = '';
            }
        
            function init() {
              if (ws) {
                ws.onerror = ws.onopen = ws.onclose = null;
                ws.close();
              }
        
              ws = new WebSocket('ws://localhost:5500');
              ws.onopen = () => {
                console.log('Connection opened!');
              }
              ws.onmessage = ({ data }) => showMessage(data);
              ws.onclose = function() {
                ws = null;
              }
            }
        
            sendBtn.onclick = function() {
              if (!ws || ws.readyState !== WebSocket.OPEN) {
                  showMessage("No WebSocket connection :(");
                  return;
              }
          
              ws.send(messageBox.value);
              showMessage(messageBox.value);
          }
          
        
            init();
})();