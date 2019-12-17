
$('.scroll-to').click(function(e){
    var jump = $(this).attr('href');
    var new_position = $(jump).offset();
    $('html, body').stop().animate({ scrollTop: new_position.top }, 500);
    e.preventDefault();
});


  
  $('.side-bar-li').hover(function() {

    $(this).children('.side-bar-text').fadeIn('200ms');

  },function(){

    $(this).children('.side-bar-text').fadeOut('200ms');
  });


  // Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.click( function(){
  modal.style.display = "block";
  modalImg.src = this.src;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() >= $(document).height()) {
      $("a i").css("color", "white");
  }

  else{
    $("a i").css("color", "black");
  }
});


