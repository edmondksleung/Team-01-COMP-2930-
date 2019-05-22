<<<<<<< Updated upstream
//MENU DROP DOWN TOGGLE----------------------------------------------------
$(".menuButton").click(function () {
    event.stopPropagation();
    $(".dropDownBox").toggle();
    $(".dropDown").toggle();
});

//MENU DROP DOWN HIDE ON CLICK ANYWHERE ELSE ON PAGE------------------------------
$(document).click(function () {
    $(".dropDownBox").hide();
    $(".dropDown").hide();
});

//HIDE DROP DOWN MENU IF WINDOW RESIZE HIGHER THAN 700 PIXELS-----------------------------
$(window).resize(function () {
    if ($(window).width() > 700) {
        $(".dropDownBox").hide();
        $(".dropDown").hide();
    }
=======
//MENU DROP DOWN----------------------------------------------------
$(".menuButton").click(function () {
    $(".dropDownBox").toggle();
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
>>>>>>> Stashed changes
});

//LOGOUT BUTTON-------------------------------------------------------------
$(".logoutButton").click(function () {
    firebase.auth().signOut();
    alert('Logged Out');
    window.location = 'signIn.html';
    console.log("test");
<<<<<<< Updated upstream
});

//JOIN BUTTON CHANGE TEXT TO UNJOIN EVENT ON CLICK-----------------------------------------------
$(".joinEventButton").click(function () {

    if (this.value=="JOIN") this.value = "Open Curtain";
    else this.value = "Close Curtain";
}
=======
>>>>>>> Stashed changes
});