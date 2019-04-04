$(window).scroll(function() {
    if ($(this).scrollTop() > 500 ) {
        $(".cd-vertical-nav").css("display", "table");
        $("cd-nav-trigger").css("display", "block");
        $('.scrollTop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrollTop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scrollUp").click(function(){$("html,body").animate({scrollTop:$("#home").offset().top},"500");return false})})

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
