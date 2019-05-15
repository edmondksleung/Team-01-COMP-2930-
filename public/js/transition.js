$(".cities").on('click', function (e) {
  $(".subPageWrapper").fadeOut(500);
  setTimeout(function () {
    $('#eventsWrapper').fadeIn(500);
  }, 1000);
  $('#eventsWrapper').css('display', 'block');
});