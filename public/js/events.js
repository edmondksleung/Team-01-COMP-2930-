//MENU DROP DOWN----------------------------------------------------
$(".menuButton").click(function () {
    event.stopPropagation();
    $(".dropDownBox").toggle();
    $(".dropDown").toggle();
});
$(document).click(function () {
    $(".dropDownBox").hide();
    $(".dropDown").hide();
});

//LOGOUT BUTTON-------------------------------------------------------------
$(".logoutButton").click(function () {
    firebase.auth().signOut();
    alert('Logged Out');
    window.location = 'signIn.html';
    console.log("test");
});