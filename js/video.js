

//For Firefox we have to handle it in JavaScript
var vids = $("video");
$.each(vids, function(){
       this.controls = false;
});
//Loop though all Video tags and set Controls as false

$("video").click(function() {
  //console.log(this);
  if (this.paused) {
     $('.playButton').stop(true, true).fadeOut();
    this.play();
  } else {
     $('.playButton:hidden').stop(true, true).fadeIn();
    this.pause();
  }
});

$(".playButton").click(function() {
  //console.log(this);
  $('.playButton').stop(true, true).fadeOut();
    $('#promoVideo').get(0).play();
});
