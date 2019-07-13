(function($) {
  "use strict"; // Start of use strict

  $(window).scroll(function() {
    var top_of_element1 = $("#trigger-perspective1").offset().top;
    var bottom_of_element1 = $("#trigger-perspective1").offset().top + $("#trigger-perspective1").outerHeight();
    var top_of_element2 = $("#trigger-perspective2").offset().top;
    var bottom_of_element2 = $("#trigger-perspective2").offset().top + $("#trigger-perspective2").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element1) && (top_of_screen < bottom_of_element1)){
        $('#skill-list-front').addClass('give-perspective')
        $('#skill-list-front').removeClass('take-perspective')
    } else {
        $('#skill-list-front').removeClass('give-perspective')
        $('#skill-list-front').addClass('take-perspective')
    }
    if ((bottom_of_screen > top_of_element2) && (top_of_screen < bottom_of_element2)){
        $('#skill-list-back').addClass('give-perspective')
        $('#skill-list-back').removeClass('take-perspective')
    } else {
        $('#skill-list-back').removeClass('give-perspective')
        $('#skill-list-back').addClass('take-perspective')
    }
});


})(jQuery); // End of use strict
