
            //MENU DROP DOWN----------------------------------------------------
            $(".menuButton").click(function () {
                $(".dropDownBox").toggle();
            });

            //MORE DETAILS BUTTON----------------------------------------------------------
            $(".readMoreButton").click(function () {
                // alert(this.id)
                $(".eventsBox").hide();
                $(".joinedEventsBox").hide();
                $(".eventsLocation").hide();
                $(".eventsInfoBox").show();
            });
            

            //CLOSE DETAILS WINDOW BUTTON---------------------------------------
            $(".closeDetailsButton").click(function () {
                $(".eventsInfoBox").hide();
                $(".eventsBox").show();
                $(".joinedEventsBox").show();
                $(".eventsLocation").show();
            });




        //HOME BUTTON-------------------------------------------------------------------
        $(".homeButton").click(function() {
            $(".eventsWrapper").hide();
            $(".subPageWrapper").fadeIn(1000);
            $(document.body).css("background", "rgb(33, 49, 92)");


        });

        //ABOUT US BUTTON-------------------------------------------------------------------
        $(".aboutButton").click(function() {
            $(".eventsWrapper").fadeOut(1000);
            $(".aboutUsWrapper").fadeIn(1000);
            $(document.body).css("background", "rgb(33, 49, 92)");
        });

        //LOCATION BUTTON-------------------------------------------------------------------
        $(".locationButton").click(function() {
            $(".eventsWrapper").fadeOut(1000);
            $(".mainPageWrapper").fadeIn(1000);
            $(document.body).css("background", "rgb(33, 49, 92)");
        });

        //LOGOUT BUTTON-------------------------------------------------------------
        $(".logoutButton").click(function () {
            firebase.auth().signOut();
            alert('Logged Out');
            window.location = 'signIn.html';
            console.log("test");
        });
    

