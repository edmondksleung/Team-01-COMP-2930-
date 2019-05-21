//MENU DROP DOWN----------------------------------------------------
$(".menuButton").click(function () {
    $(".dropDownBox").toggle();
    $(".dropDown").toggle();

    $(document).mouseup(function(e) {
    var menu = $(".dropDownBox");
    //If a click is targeted outside of the menu icon
    if (!menu.is(e.target) && menu.has(e.target).length === 0) 
    {
        menu.hide();
        $(".dropDown").hide();
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