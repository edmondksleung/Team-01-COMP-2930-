//SHOW EVENTS WRAPPER PAGE---------------------------------------------
$("#omgtest").click(function() {
    $(".mainPageWrapper").hide();
    $("#eventsWrapper").show();
    $(document.body).css("background", "white");
    console.log("omg");
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