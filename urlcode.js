function getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}

var myId;

$('#myBtn').click(function () {
    
    var myUrl = $('#input').val();
    myId = getId(myUrl);
    console.log('1');
    $('#myId').html(myId);
    console.log('2');
/*  
     $('#myCode').html(`
    <video
    id="vid1"
    class="video-js vjs-default-skin"
    controls
    autoplay
    width="1280" height="528"
    data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=` + myId + `"}] }'>
  </video>`); 
  */
  $('#BodyDiv1').html(`<video
  id="vid1"
  class="video-js vjs-default-skin"
  controls
  width="560" height="315"
  data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=iRusbYIyRNI"}] }'
>
</video>`);
  console.log('3');
 
    //$('#myCode').html('<iframe width="560" height="315" src="//www.youtube.com/embed/' + myId + '" frameborder="0" allowfullscreen></iframe>');
});


