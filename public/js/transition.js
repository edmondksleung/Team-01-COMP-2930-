<<<<<<< HEAD
$(".cities").on('click', function (e) {
  $(".subPageWrapper").fadeOut(500);
=======
$(".cities").click(function () {
  $(".welcomePageWrapper").fadeOut(500);
>>>>>>> fb929859e4cf4d3ebdbc10fa535a5ff0e34e72d7
  setTimeout(function () {
    $('#eventsWrapper').fadeIn(500);
  }, 1000);
  $('#eventsWrapper').css('display', 'block');
});