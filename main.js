$(document).ready(function(){
    // $("#name-title").html("🙏🏿");
    console.log('Hello world');

    $( "#projects-link" ).click(function() {
    $('html, body').animate({scrollTop: $('#projects').offset().top},
            1000);
    });
    
     $( "#profile-picture" ).click(function() {
        $("profile-picture").attr("src", "https://designwoop.com/uploads/2014/01/14-2.png");
    });

});