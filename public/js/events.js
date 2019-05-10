//P
//SHOW VOLUNTEER TAB---------------------------------------------------------
$("#volunteerTab").click(function () {
    $("#volunteerTab").css("borderBottom", "4px solid #3498db");
    $("#appliedTab").css("borderBottom", "none");
    $("#eventInfoBox").hide();
    $("#eventsBox").show();

});

//SHOW APPLIED TAB---------------------------------------------------------
$("#appliedTab").click(function () {
    $("#appliedTab").css("borderBottom", "4px solid #3498db");
    $("#volunteerTab").css("borderBottom", "none");
});

//MORE DETAILS BUTTON----------------------------------------------------------
$("#readMoreButton").click(function () {
    $("#eventsBox").fadeOut("fast", function () {
        $("#eventInfoBox").fadeIn(600);
    })
});

//CANCEL DETAILS WINDOW BUTTON--------------------------------------->
$("#cancelButton").click(function () {
    $("#eventsInfoBox").hide();
    $("#eventInfoBox").hide();
    $("#eventsBox").show();
});

//JOIN EVENTS BUTTON------------------------------------------------->