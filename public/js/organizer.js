//SHOW CREATED EVENTS TAB ON LOAD---------------------------------------------------------
$("#volunteerTab").click(function () {
    $("#volunteerTab").css("borderBottom", "4px solid #3498db");
    $("#appliedTab").css("borderBottom", "none");
    $("#eventInfoBox").hide();
    $("#eventsBox").show();

});

//SHOW CREATE TAB---------------------------------------------------------
$("#createTab").click(function () {
    $("#createTab").css("borderBottom", "4px solid #3498db");
    $("#createdTab").css("borderBottom", "none");
    $("#eventInfoBox").hide();
    $("#eventsBox").show();

});

//SHOW APPLIED TAB---------------------------------------------------------
$("#appliedTab").click(function () {
    $("#appliedTab").css("borderBottom", "4px solid #3498db");
    $("#volunteerTab").css("borderBottom", "none");
});