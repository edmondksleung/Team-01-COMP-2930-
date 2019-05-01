var database = firebase.database();
var dbref = database.ref('events');
dbref.on('value', gotData, errData);

function gotData(data) {
  //console.log(data.val());
  var events = data.val();
  var keys = Object.keys(events);
  console.log(keys);
  for (var i = 0; i < keys.length; i++){
    var k = keys[i];
    var event = events[k].subject;
    console.log(event);
  }
}

function errData(err) {
  console.log('Error!');
  console.log(err);
}

