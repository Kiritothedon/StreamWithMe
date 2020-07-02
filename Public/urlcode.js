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
var linkBar = document.getElementById("input");
// Execute a function when the user releases a key on the keyboard
linkBar.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});

function getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}
$('#myBtn').click(function () {
    
    
    var myUrl = $('#input').val();
    myId = getId(myUrl);
    $('#myId').html(myId);  
    if (!myUrl.includes('youtube') || myUrl.length<8){
        
        console.log('\\Invalid Url//');
        $('#BodyDiv1').html(`Enter A Valid Url`); 
    }else{
    //window.location.href = ('/Second.html');
      var x = document.getElementById("myBtn");
      x.style.display = "none";
      var y = document.getElementById("input");
      y.style.display = "none";
      $('#label1').remove();
      
    
    $('#BodyDiv1').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + myId + '" frameborder="0" allowfullscreen></iframe>');
    console.log('video done');
    //$('#BodyDiv1').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + myId + '" frameborder="0" allowfullscreen></iframe>');

      var y = document.getElementById("messageBox");
      y.style.display = "inline-block"
      var z = document.getElementById("send");
      z.style.display = "inline-block";
      var usernameField = document.getElementById("input-username");
      usernameField.style.display = "none"
      /*
      */
     
   /* 
  https://www.youtube.com/watch?v=iRusbYIyRNI
*/

}
 
    
});


