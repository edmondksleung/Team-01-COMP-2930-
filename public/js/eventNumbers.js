let database = firebase.database();
let dbref = database.ref('events');
dbref.on('value', function (snap) {
  // function count(city){
  //   Object.keys(snap.val().Vancouver).length;
  // }
  console.log(Object.keys(snap.val().Vancouver).length);
  document.getElementById('vancouver').innerHTML = Object.keys(snap.val().Vancouver).length;
  document.getElementById('burnaby').innerHTML = Object.keys(snap.val().Burnaby).length;
  document.getElementById('coquitlam').innerHTML = Object.keys(snap.val().Coquitlam).length;
});