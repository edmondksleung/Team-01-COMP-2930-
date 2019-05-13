//EVENTS PAGE ON LOAD SHOW VOLUNTEER PAGE--------------------------------->
$("#eventsWrapper").ready(function() {
    $("#volunteerTab").css({"borderBottom": "4px solid #3498db", "color": "black"});
    $("#appliedTab").css({"borderBottom": "none", "color": "grey"});
    $("#eventInfoBox").hide();
    $("#eventsBox").show();
    
});

//SHOW VOLUNTEER TAB---------------------------------------------------------
$("#volunteerTab").click(function () {
    $("#volunteerTab").css({"borderBottom": "4px solid #3498db", "color": "black"});
    $("#appliedTab").css({"borderBottom": "none", "color": "grey"});
    $("#eventInfoBox").hide();
    $("#eventInfoBox").hide();
    $("#eventsBox").show();
});

//SHOW JOINED TAB---------------------------------------------------------
$("#appliedTab").click(function () {
    $("#appliedTab").css({"borderBottom": "4px solid #3498db", "color": "black"});
    $("#volunteerTab").css({"borderBottom": "none", "color": "grey"});
    $("#eventsBox").hide();
    $("#joinedEventsBox").show();
});

//MENU DROP DOWN---------------------------------------------------->
$("#menuButton").click(function () {
    $("#dropDownBox").toggle();
})

//MORE DETAILS BUTTON----------------------------------------------------------
$("#readMoreButton").click(function () {
    $("#eventsBox").fadeOut("fast", function () {
        $("#eventInfoBox").show();
    })
});

//CANCEL DETAILS WINDOW BUTTON--------------------------------------->
$("#cancelButton").click(function () {
    $("#eventsInfoBox").hide();
    $("#eventInfoBox").hide();
    $("#eventsBox").show();
});

