let database = firebase.database();
// Fetching and assigning URL parameter
let params = (new URL(document.location)).searchParams;
let cityName = params.get("city");
// console.log(cityName);
let dbref = database.ref(`events/${cityName}`);
dbref.on('value', gotData, errData);
//console.log(dbref);
// Grabs data from firebase
function gotData(data) {
   //console.log(data.val());
  let events = data.val();
    console.log(events);
  let keys = Object.keys(events);
   console.log(keys);

  // Loop that creates list for each event
  for (let i = 0; i < keys.length; i++){
    let k = keys[i];
    let event = events[k].subject;
    console.log(k);
    let list = document.createElement('li');
    // Giving attribute to list that redirects to the detail page
    let link = document.createElement('a');
    // Giving unique id to url(template literal)
    link.setAttribute('href', `./eventDetail.html?city=${cityName}&key=${k}`);
    // Append event data in the anchor
    link.append(event);
    console.log(link);
    // Append anchor in the list
    list.append(link);
    let eventsList = document.getElementById('eventsList');
    eventsList.append(list);
  }
}

function errData(err) {
  console.log('Error!');
  console.log(err);
}


