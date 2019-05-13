$(".cities").click(function () {
  $(".subPageWrapper").fadeOut(500);
  setTimeout(function () {
    $('.mainPageWrapper').fadeIn(2000);
  }, 1000);
  $('.mainPageWrapper').css('display: block');
});