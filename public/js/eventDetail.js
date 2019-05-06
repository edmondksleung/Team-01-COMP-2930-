let database = firebase.database();
let id = window.location.search.substr(1);
let dbref = database.ref(`events/${id}`);
dbref.on('value', function (snapshot) {
  document.getElementById('subject').innerHTML = (snapshot.val().subject);
  document.getElementById('email').innerHTML = (snapshot.val().email);
  document.getElementById('content').innerHTML = (snapshot.val().content);
});