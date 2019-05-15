        //Skips login page while signed in.
        $(document).ready(function () {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    setTimeout(function () {
                        $('.welcomePageWrapper').fadeIn(500);
                    }, 1000);
                    $('.welcomePageWrapper').css('display: block');
                } else {
                    $("#navigation").show();
                    $(".signInPageWrapper").show();
                }
            });
        });
