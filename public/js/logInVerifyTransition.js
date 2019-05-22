        //Function event jquery function upon clicking login button
        $("#loginButton").click(function (event) {
            event.preventDefault();

            //If firebase user recognized...
            //Fades out the login form,
            //Shifts the eVolunteer h1 header downwards,
            //Fades out the signIn page

            var user = firebase.auth().currentUser;
            var userEmail = $("#emailField").val();
            var userPass = $("#passField").val();

            //if incorrect email/password, trigger login refused animation
            firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {

                $("#loginButton").addClass("invalid");
                setTimeout(function () {
                    $("#loginButton").removeClass("invalid");
                }, 1000);
            });

            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    $("form").fadeOut(50);
                    $(".signInPageWrapper").addClass("form-success");
                    $(".form-success").fadeOut(1000);
                    setTimeout(function () {
                        $(".welcomePageWrapper, .navigation").fadeIn(4000);
                    }, 1000);
                    $(".welcomePageWrapper, .navigation").css("display: block");
                }
            });
        });