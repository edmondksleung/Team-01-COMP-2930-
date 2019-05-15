        //Grabs audio file from folder and upon clicking hidden egg "e", plays audio clip.
        var helloSound = new Audio('../public/Audio/test.mp3');
        helloSound.src = "../public/Audio/test.mp3";

        $("#eAudio").click(function () {
            helloSound.play();
            $("#canvas").css('display', 'block');
            setTimeout(function () {
                $('canvas').css('display', 'none');
            }, 30000);
        });
