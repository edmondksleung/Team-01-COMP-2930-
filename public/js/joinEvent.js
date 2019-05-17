// for the current user
// create this user node in the datebase
// firebase.auth().onAuthStateChanged(function (user) {
//     firebase.database().ref("users/" + user.uid).update(
//       {
//         "name" : user.displayName,
//         "email" : user.email,
//         "isOrg" : false,
//         "uid" : user.uid,
//       });
    
//   });
var city = $(".cities").attr("name");
console.log(city);
$("#joinEventButton").click(function(){

    const str = "users";
    console.log(str);
    console.log(city);
    $.ajax({
        type: "GET",
        url: `https://evolunteer-45c5d.firebaseio.com/users.json`,
        dataType: 'json',
        success: function (data) {
            let keys = Object.keys(data);
            console.log(keys);
            
            firebase.auth().onAuthStateChanged(function(user){

                firebase.database().ref("events/Abbotsford/" + user.uid).update(
                    {
                        "userKey" : user.uid,
                    })
            })


        }
    })
})