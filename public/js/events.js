//MENU DROP DOWN----------------------------------------------------
$(".menuButton").click(function () {
    $(".dropDownBox").toggle();
    $(".dropDown").toggle();
});


//HOME BUTTON-------------------------------------------------------------------
$(".homeButton").click(function () {
    $(".eventsWrapper").hide();
    $(".subPageWrapper").fadeIn(1000);
    $(document.body).css("background", "rgb(33, 49, 92)");


});

//ABOUT US BUTTON-------------------------------------------------------------------
$(".aboutButton").click(function () {
    $(".eventsWrapper").fadeOut(1000);
    $(".aboutUsWrapper").fadeIn(1000);
    $(document.body).css("background", "rgb(33, 49, 92)");
});

//LOCATION BUTTON-------------------------------------------------------------------
$(".locationButton").click(function () {
    $(".eventsWrapper").fadeOut(1000);
    $(".mainPageWrapper").fadeIn(1000);
    $(document.body).css("background", "rgb(33, 49, 92)");
});

//LOGOUT BUTTON-------------------------------------------------------------
$(".logoutButton").click(function () {
    firebase.auth().signOut();
    alert('Logged Out');
    window.location = 'signIn.html';
    console.log("test");
});