<<<<<<< Updated upstream
// // for the current user
// // create this user node in the datebase
// // firebase.auth().onAuthStateChanged(function (user) {
// //     firebase.database().ref("users/" + user.uid).update(
// //       {
// //         "name" : user.displayName,
// //         "email" : user.email,
// //         "isOrg" : false,
// //         "uid" : user.uid,
// //       });

// //   });
=======
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
>>>>>>> Stashed changes
// var city = $(".cities").attr("name");
// // console.log(city);
// $(document).on("click", ".joinEventButton", function(){
//     $(".joinEventButton")


//     $.ajax({
//         type: "GET",
//         url: "https://evolunteer-45c5d.firebaseio.com/events/"


//     })   
// }

//     const str = "users";
//     // console.log(str);
//     // console.log(city);
//     $.ajax({
//         type: "GET",
//         url: `https://evolunteer-45c5d.firebaseio.com/users.json`,
//         dataType: 'json',
//         success: function (data) {
//             let keys = Object.keys(data);
//             console.log(keys);
<<<<<<< Updated upstream
=======

//             firebase.auth().onAuthStateChanged(function(user){
>>>>>>> Stashed changes

//             firebase.auth().onAuthStateChanged(function (user) {

//                 firebase.database().ref("events/Abbotsford/" + user.uid).update({
//                     "userKey": user.uid,
//                 })
//             })


//         }
//     })
// })