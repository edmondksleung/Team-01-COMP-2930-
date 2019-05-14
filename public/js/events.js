//SHOW EVENTS WRAPPER PAGE---------------------------------------------
$(".cityImage h1").click(function () {
    $(".mainPageWrapper").fadeOut(500);
    $("#eventsWrapper").fadeIn(1500);
    $("#dropDownBox").hide();
    $(document.body).css("background", "white");
});

//EVENTS PAGE ON LOAD SHOW VOLUNTEER PAGE---------------------------------
$("#eventsWrapper").ready(function () {
    $("#eventsInfoBox").hide();
    $(".joinedEventsBox").hide();
    $(".eventsBox").show();
});

//SHOW VOLUNTEER TAB---------------------------------------------------------
$("#volunteerTab").click(function () {
    $("#volunteerTab").css({
        "borderBottom": "4px solid #3498db",
        "color": "black"
    });
    $("#appliedTab").css({
        "borderBottom": "none",
        "color": "grey"
    });
    $("#eventsInfoBox").hide();
    $(".joinedEventsBox").hide();
    $(".joinedEventsInfoBox").hide();
    $(".eventsBox").show();
});

//SHOW JOINED TAB---------------------------------------------------------
$("#appliedTab").click(function () {
    $("#appliedTab").css({
        "borderBottom": "4px solid #3498db",
        "color": "black"
    });
    $("#volunteerTab").css({
        "borderBottom": "none",
        "color": "grey"
    });
    $(".eventsBox").hide();
    $("#eventsInfoBox").hide();
    $(".joinedEventsInfoBox").hide();
    $(".joinedEventsBox").show();
});

//MENU DROP DOWN----------------------------------------------------
$(".menuButton").click(function () {
    $("#dropDownBox").toggle();
});

//BACK BUTTON FUNCTION-------------------------------------------------------
$(".backButton").click(function () {
    $("#eventsWrapper").fadeOut(1000);
    $(".mainPageWrapper").fadeIn(1000);
});

//MORE DETAILS BUTTON----------------------------------------------------------
$(".readMoreButton").click(function () {
    $(".eventsBox").hide();
    $(".joinedEventsBox").hide();
    $("#eventsInfoBox").show();
});


//ALREADY JOINED EVENTS MORE DETAILS BUTTON---------------------------------------
$(".joinedReadMoreButton").click(function () {
    $(".eventsBox").hide();
    $(".joinedEventsBox").hide();
    $(".joinedEventsInfoBox").show();
});

//CANCEL DETAILS WINDOW BUTTON---------------------------------------
$("#cancelButton").click(function () {
    $("#eventsInfoBox").hide();
    $("#eventInfoBox").hide();
    $("#eventsBox").show();
});

//HOME BUTTON-------------------------------------------------------------------
$(".homeButton").click(function() {
    $("#eventsWrapper").hide();
    $(".subPageWrapper").fadeIn(1000);
    $(document.body).css("background", "rgb(33, 49, 92)");


});

//ABOUT US BUTTON-------------------------------------------------------------------
$(".aboutButton").click(function() {
    $("#eventsWrapper").fadeOut(1000);
    $(".aboutUsWrapper").fadeIn(1000);
    $(document.body).css("background", "rgb(33, 49, 92)");
});

//LOCATION BUTTON-------------------------------------------------------------------
$(".locationButton").click(function() {
    $("#eventsWrapper").fadeOut(1000);
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