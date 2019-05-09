//SHOW VOLUNTEER TAB---------------------------------------------------------
$("#volunteerTab").click(function () {
    $("#volunteerTab").css("borderBottom", "4px solid rgb(34,189,34)");
    $("#appliedTab").css("borderBottom", "none");
    $("#eventInfoBox").hide();
    $("#eventsBox").show();

});

//SHOW APPLIED TAB---------------------------------------------------------
$("#appliedTab").click(function () {
    $("#appliedTab").css("borderBottom", "4px solid rgb(34,189,34)");
    $("#volunteerTab").css("borderBottom", "none");
});

//MORE DETAILS BUTTON----------------------------------------------------------
$("#readMoreButton").click(function () {
    $("#eventsBox").fadeOut("fast", function () {
        $("#eventInfoBox").fadeIn(600);
    })
});