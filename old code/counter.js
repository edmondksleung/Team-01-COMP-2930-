$(document).ready(function(){
    // database reference variable
    var dbRef = firebase.database().ref().child("CurrentUsers");
    // event callback receieves snapshot
    dbRef.once("value", function(snap){
    // assigns value of snap to <p> with id="userNum"
        $("#userNum").text(snap.val());
    });

    $("#join").on("click", function(){
        dbRef.once("value", )

    })

    $("")
        var name = document.getElementById("nextBtn").value;
        var dbref = firebase.database().ref("/");
        dbref.once("value", function(snap){
            var {AddedCount} = snap.val();
            var {Count} = snap.val();
            Count += AddedCount;
            console.log(Count);
            dbref.update({
            "Count" : Count
            });
            window.location.href="./index.html";
        }
        
});