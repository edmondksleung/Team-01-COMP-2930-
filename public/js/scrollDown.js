    //Upon clicking the clickButton to view cities button on welcome page, scrolls down
        $("#clickButton").click(function () {
            $('html, body').animate({
                scrollTop: $("#breakPoint").offset().top
            }, 500);
        });
