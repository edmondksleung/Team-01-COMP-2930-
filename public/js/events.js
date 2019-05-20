//MENU DROP DOWN----------------------------------------------------
$(".menuButton").click(function () {
    $(".dropDownBox").toggle();
    $(".dropDown").toggle();
});

//LOGOUT BUTTON-------------------------------------------------------------
$(".logoutButton").click(function () {
    firebase.auth().signOut();
    alert('Logged Out');
    window.location = 'signIn.html';
    console.log("test");
});