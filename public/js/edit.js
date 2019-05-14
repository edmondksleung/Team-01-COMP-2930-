$(document).ready(function(){

  let database = firebase.database();
  let params = (new URL(window.location)).searchParams;
  let city = params.get("city");
  let key = params.get("key");
  //console.log(params);
  let dbref = database.ref(`events/${city + "/" + key}`);
  dbref.on('value', function (snapshot) {
    //console.log(snapshot.val().subject);
    $("#subject").val(snapshot.val().subject)
    $("#email").val(snapshot.val().email)
    $("#city").val(snapshot.val().city)
    $("#content").val(snapshot.val().content);
  })
  // updates firebase database and then redirects user back to event details page
  $("#update").on("click", function(e){
    e.preventDefault();
    //alert("success");
    let subject = getInputVal('subject');
    let email = getInputVal('email');
    let content = getInputVal('content');
    let city = getInputVal('city');
    updateMessage(subject, email, content, city);

    function updateMessage(subject, email, content, city){
      let newMessageRef = firebase.database().ref('events/' + city).push();
      newMessageRef.update({
        subject: subject,
        email: email,
        content: content,
        city: city
      });
    }

    // function to grab value from input
    function getInputVal(id) {
    return document.getElementById(id).value;
}
    // sends user back to event detail page (previous page)
    setTimeout(function(){
    //alert("success");
      window.location.href= `../public/eventDetail.html?city=${city}&key=${key}`;
      //console.log(city);
      //console.log(key);
    }, 3000);
  });

  $("#delete").on("click", function(){
    //alert("success");
    // Removes the post front-end and in database
    dbref.remove();
    //Directs back to list of cities.html
    setTimeout(function(){
      window.location.href= "../public/cities.html";
    }, 1000);
  });
});
