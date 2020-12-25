$(document).ready(function(){
    // $("#name-title").html("🙏🏿");
    console.log('Hello world');

    $( "#projects-link" ).click(function() {
    $('html, body').animate({scrollTop: $('#projects').offset().top},
            1000);
    });
    
     $( "#profile-picture" ).click(function() {
         
         const originalImage="https://uploads.scratch.mit.edu/galleries/thumbnails/110/6432.png";
         const secondImage = "https://designwoop.com/uploads/2014/01/14-2.png";
         const currentImage = $("#profile-picture").attr("src");
         
         
          
        $("#profile-picture").attr("src", currentImage === originalImage ? secondImage : originalImage);
    });

});