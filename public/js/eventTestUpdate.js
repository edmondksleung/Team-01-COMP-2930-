$(document).ready(function(){

  let database = firebase.database();
  // Fetching URL parameter
  let params = (new URL(window.location)).searchParams;
  let city = params.get("city");
  let key = params.get("key");
  // console.log(city);
  //console.log(key);
  let dbref = database.ref(`events/${city + "/" + key}`);
  //console.log(dbref);
  // Display details of the events on the page
  /*
  dbref.on('value', function (snapshot) {
    document.getElementById('subject').innerHTML = (snapshot.val().subject);
    document.getElementById('email').innerHTML = (snapshot.val().email);
    document.getElementById('city').innerHTML = (snapshot.val().city);
    document.getElementById('content').innerHTML = (snapshot.val().content);
  });
  */
  $("#update").attr('href', `./edit.html?city=${city}&key=${key}`);

  $("get").on("click", function(){
    

  })
  








});
