const moment = require('moment');
function formatMessage(username, text){
return{
    username,
    text,
    time: moment().format('h:mm a')
}
}
//export allows useage of this in server.js
module.exports = formatMessage;