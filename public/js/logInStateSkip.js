        //Skips login page while signed in.
        $(document).ready(function () {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    setTimeout(function () {
                        $('.welcomePageWrapper, .navigation').fadeIn(500);
                    }, 1000);
                    $('.welcomePageWrapper, .navigation').css('display: block');
                } else {
                    $(".eventsWrapper").hide();
                    $(".submitEventPageWrapper").hide();
                    $(".eventsInfoBox").hide();
                    $(".welcomePageWrapper").hide();
                    
                    $(".signInPageWrapper").show();
                }
            });
        });
