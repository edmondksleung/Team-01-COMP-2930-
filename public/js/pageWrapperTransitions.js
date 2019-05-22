        //Function event jquery function upon clicking mission button
        $(".homePageBtn").click(function (event) {
            event.preventDefault();
            $(".missionPageWrapper").fadeOut(100);
            $(".submitEventPageWrapper").fadeOut(100);
            $(".eventsInfoBox").fadeOut(100);
            $(".contactUsWrapper").fadeOut(100);
            $(".aboutUsPageWrapper").fadeOut(100);
            $(".eventsWrapper").fadeOut(100);
            setTimeout(function () {
                $(".welcomePageWrapper").fadeIn(300);
                $(".welcomePageWrapper").css("display", "block");
            }, 200);
            $(".dropDownBox").fadeOut(100);
            $(".dropDown").fadeOut(100);
        });
        $(".missionPageBtn").click(function (event) {
            event.preventDefault();
            $(".welcomePageWrapper").fadeOut(100);
            $(".submitEventPageWrapper").fadeOut(100);
            $(".eventsWrapper").fadeOut(100);
            $(".eventsInfoBox").fadeOut(100);
            $(".contactUsWrapper").fadeOut(100);
            $(".aboutUsPageWrapper").fadeOut(100);
            setTimeout(function () {
                $(".missionPageWrapper").fadeIn(300);
                $(".missionPageWrapper").css("display", "block");
            }, 200);
            $(".dropDownBox").fadeOut(100);
            $(".dropDown").fadeOut(100);
        });
        $(".eventsPageBtn").click(function (event) {
            event.preventDefault();
            $(".missionPageWrapper").fadeOut(100);
            $(".eventsInfoBox").fadeOut(100);
            $(".eventsWrapper").fadeOut(100);
            $(".submitEventPageWrapper").fadeOut(100);
            $(".contactUsWrapper").fadeOut(100);
            $(".aboutUsPageWrapper").fadeOut(100);
            setTimeout(function () {
                $(".welcomePageWrapper").fadeIn(300);
                $(".welcomePageWrapper").css("display", "block");
                $('html, body').animate({
                    scrollTop: $("#breakPoint").offset().top
                }, 500);
            }, 200);
            $(".dropDownBox").fadeOut(100);
            $(".dropDown").fadeOut(100);
        });

        $(".myListingsPageBtn").click(function (event) {
            event.preventDefault();
            $(".welcomePageWrapper").fadeOut(100);
            $(".missionPageWrapper").fadeOut(100);
            $(".eventsInfoBox").fadeOut(100);
            $(".eventsWrapper").fadeOut(100);
            $(".aboutUsPageWrapper").fadeOut(100);
            $(".contactUsWrapper").fadeOut(100);

            setTimeout(function () {
                $(".submitEventPageWrapper").fadeIn(300);
                $(".submitEventPageWrapper").css("display", "grid");
                $("#submitForm").css("display", "grid");

            }, 200);
            $(".dropDownBox").fadeOut(100);
            $(".dropDown").fadeOut(100);
        });
        $(".aboutUsPageBtn").click(function (event) {
            event.preventDefault();
            $(".welcomePageWrapper").fadeOut(100);
            $(".missionPageWrapper").fadeOut(100);
            $(".submitEventPageWrapper").fadeOut(100);
            $(".eventsInfoBox").fadeOut(100);
            $(".eventsWrapper").fadeOut(100);
            $(".contactUsWrapper").fadeOut(100);
            setTimeout(function () {
                $(".aboutUsPageWrapper").fadeIn(300);
                $(".aboutUsPageWrapper").css("display", "block");
            }, 200);
            $(".dropDownBox").fadeOut(100);
            $(".dropDown").fadeOut(100);
        });
        $(".contactPageBtn").click(function (event) {
            event.preventDefault();
            $(".welcomePageWrapper").fadeOut(100);
            $(".missionPageWrapper").fadeOut(100);
            $(".eventsInfoBox").fadeOut(100);
            $(".eventsWrapper").fadeOut(100);
            $(".submitEventPageWrapper").fadeOut(100);
            $(".aboutUsPageWrapper").fadeOut(100);

            setTimeout(function () {
                $(".contactUsWrapper").fadeIn(300);
                $(".contactUsWrapper").css("display", "block");
            }, 200);
            $(".dropDownBox").fadeOut(100);
            $(".dropDown").fadeOut(100);
        });

        //Makes the background page color fade alongside transitions
        $(".homePageBtn").click(function () {
            $("body").css("background", "rgb(33, 49, 92)");
            $(".dropButtons").css("background", "rgb(33, 49, 92)");
        });
        $(".missionPageBtn").click(function () {
            $("body").css("background", "rgb(25, 76, 85)");
            $(".dropButtons").css("background", "rgb(25, 76, 85)");
        });
        $(".eventsPageBtn").click(function () {
            $("body").css("background", "rgb(33, 49, 92)");
            $(".dropButtons").css("background", "rgb(33, 49, 92)");
        });
        $(".myListingsPageBtn").click(function () {
            $("body").css("background", "#260E63");
            $(".dropButtons").css("background", "#260E63");
        });
        $(".aboutUsPageBtn").click(function () {
            $("body").css("background", "#5C2045");
            $(".dropButtons").css("background", "#5C2045");
        })
        $(".contactPageBtn").click(function () {
            $("body").css("background", "#B68D1B");
            $(".dropButtons").css("background", "#B68D1B");
        });