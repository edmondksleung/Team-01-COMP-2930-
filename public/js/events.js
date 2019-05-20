//MENU DROP DOWN----------------------------------------------------
$(".menuButton").click(function () {
    $(".dropDownBox").show();
    $(".dropDown").show();

    $(document).mouseup(function (e) {

        if ($(e.target).is(".menuButton")) {
            $(".dropDownBox").toggle();
            $(".dropDown").toggle();
        } else {
            $(".dropDownBox").toggle();
    $(".dropDown").toggle();
        }
    });
});

//LOGOUT BUTTON-------------------------------------------------------------
$(".logoutButton").click(function () {
    firebase.auth().signOut();
    alert('Logged Out');
    window.location = 'signIn.html';
    console.log("test");
});