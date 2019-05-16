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
$("#joinEventButton").click(function(){
    let city = $(this).attr("name");
    console.log(city);
    $.ajax({
        type: "GET",
        url: `https://evolunteer-45c5d.firebaseio.com/events/${city}.json`,
        dataType: 'json',
        success: function (data) {
            let keys = Object.keys(data);
            console.log(keys);
        }
    })
})