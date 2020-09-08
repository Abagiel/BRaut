$(document).ready(function() {
  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if (position >= 350) {
      $(".scrollUp").css({
        opacity: "1",
        top: "80%"
      });
    } else {
      $(".scrollUp").css({
        opacity: "0",
        top: "0"
      });
    }
  });
});
