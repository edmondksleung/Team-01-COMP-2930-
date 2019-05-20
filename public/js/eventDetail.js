$(document).ready(function () {
  let database = firebase.database();
  // Fetching URL parameter
  let params = (new URL(window.location)).searchParams;
  let city = params.get("city");
  let key = params.get("key");
  // console.log(city);
  console.log(key);
  let dbref = database.ref(`events/${city + "/" + key}`);
  console.log(dbref);
  // Display details of the events on the page
  dbref.on('value', function (snapshot) {
    document.getElementById('subject').innerHTML = (snapshot.val().subject);
    document.getElementById('email').innerHTML = (snapshot.val().email);
    document.getElementById('city').innerHTML = (snapshot.val().city);
    document.getElementById('content').innerHTML = (snapshot.val().content);
  });
  // Creates a new variable "anchor"
  //var anchor = $("<a></a>");
  // Giving unique id to url(template literal) & and passes it to next page
  //anchor.attr('href', `./edit.html?city=${city}&key=${key}`);
  //$("body").append(anchor);

  $("#update").attr('href', `./edit.html?city=${city}&key=${key}`);

  // Creates a new variable "button" using jQuery 
  // var btn = $("<button></button>");
  // anchor.append(btn);
  // btn.append("edit");



  // Adds the button element within same, but before <p> tag as "delete"
  // var dlt = $("<button></button");
  //dlt.attr("id", "delete");
  //dlt.append("Delete");
  //$("body").append(dlt);

  //$("#delete").before(btn);


  // Removes database child node using delete button within eventDetail.html 
  // Uses jQuery to reference 
  $("#delete").on("click", function () {
    //alert("success"); 
    // Removes the post front-end and in database
    dbref.remove();
    //Directs back to list of cities.html
    setTimeout(function () {
      window.location.href = "../public/cities.html";
    }, 1000);
  });







});