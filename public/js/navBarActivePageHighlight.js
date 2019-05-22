        /*-------------------------- NAV BAR ACTIVE PAGE STATUS HIGHLIGHT  ----------------------*/
        //determines what page it's on depending on wrapper display, then adds background white color to nav bar active page
        $(".homePageBtn").addClass("activePage");
        $(".homePageBtn").click(function (event) {
            $(".homePageBtn").addClass("activePage");
            $(".missionPageBtn").removeClass("activePage");
            $(".eventsPageBtn").removeClass("activePage");
            $(".myListingsPageBtn").removeClass("activePage");
            $(".aboutUsPageBtn").removeClass("activePage");
            $(".contactPageBtn").removeClass("activePage");
        });
        $(".cities").click(function (event) {
            $(".homePageBtn").removeClass("activePage");
            $(".missionPageBtn").removeClass("activePage");
            $(".eventsPageBtn").addClass("activePage");
            $(".myListingsPageBtn").removeClass("activePage");
            $(".aboutUsPageBtn").removeClass("activePage");
            $(".contactPageBtn").removeClass("activePage");
            $("body").css("background", "#2f9e3a");
            $('html, body').animate({
                scrollTop: $(".navigation").offset().top
            }, 500);
        })
        $(".missionPageBtn").click(function (event) {
            $(".missionPageBtn").addClass("activePage");
            $(".homePageBtn").removeClass("activePage");
            $(".eventsPageBtn").removeClass("activePage");
            $(".myListingsPageBtn").removeClass("activePage");
            $(".aboutUsPageBtn").removeClass("activePage");
            $(".contactPageBtn").removeClass("activePage");
        });
        $(".eventsPageBtn").click(function (event) {
            $(".missionPageBtn").removeClass("activePage");
            $(".homePageBtn").removeClass("activePage");
            $(".eventsPageBtn").addClass("activePage");
            $(".myListingsPageBtn").removeClass("activePage");
            $(".aboutUsPageBtn").removeClass("activePage");
            $(".contactPageBtn").removeClass("activePage");
        });
        $(".myListingsPageBtn").click(function (event) {
            $(".homePageBtn").removeClass("activePage");
            $(".missionPageBtn").removeClass("activePage");
            $(".eventsPageBtn").removeClass("activePage");
            $(".myListingsPageBtn").addClass("activePage");
            $(".aboutUsPageBtn").removeClass("activePage");
            $(".contactPageBtn").removeClass("activePage");
        });
        $(".aboutUsPageBtn").click(function (event) {
            $(".homePageBtn").removeClass("activePage");
            $(".missionPageBtn").removeClass("activePage");
            $(".eventsPageBtn").removeClass("activePage");
            $(".myListingsPageBtn").removeClass("activePage");
            $(".aboutUsPageBtn").addClass("activePage");
            $(".contactPageBtn").removeClass("activePage");
        });
        $(".contactPageBtn").click(function (event) {
            $(".homePageBtn").removeClass("activePage");
            $(".missionPageBtn").removeClass("activePage");
            $(".eventsPageBtn").removeClass("activePage");
            $(".myListingsPageBtn").removeClass("activePage");
            $(".aboutUsPageBtn").removeClass("activePage");
            $(".contactPageBtn").addClass("activePage");
        });