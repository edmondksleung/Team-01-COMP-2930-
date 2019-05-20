$(".cities").click(function () {
  $(".welcomePageWrapper").fadeOut(500);
  setTimeout(function () {
    $('.eventsWrapper').fadeIn(500);
  }, 1000);
  $('.eventsWrapper').css('display', 'block');
});


$(document).mouseup(function(e) 
{
    var menu = $(".dropDownBox");
    //If a click is targeted outside of the menu icon
    if (!menu.is(e.target) && menu.has(e.target).length === 0) 
    {
        menu.hide();
        $(".dropDown").hide();
    }
});