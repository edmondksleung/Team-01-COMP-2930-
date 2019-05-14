$(".cities").click(function () {
  $(".welcomePageWrapper").fadeOut(500);
  setTimeout(function () {
    $('#eventsWrapper').fadeIn(2000);
  }, 1000);
  $('#eventsWrapper').css('display', 'block');
});