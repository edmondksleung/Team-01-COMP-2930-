//Upon clicking the clickButton to view cities button on welcome page, scrolls down
$("#clickButton").click(function () {
    $('html, body').animate({
        scrollTop: $("#breakPoint").offset().top
    }, 500);
});

//Upon clicking meet the team button, the page will scroll down to the bios of team members
$("#aboutUsPageClickButton").click(function () {
    $('html, body').animate({
        scrollTop: $("#aboutUsPageBreakPoint").offset().top
    }, 500);
});