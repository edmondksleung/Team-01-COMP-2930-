let database = firebase.database();
let dbref = database.ref('events');
dbref.on('value', gotData, errData);

// Grabs data from firebase
function gotData(data) {
  // console.log(data.val());
  let events = data.val();
  let keys = Object.keys(events);
  // console.log(keys);

  // Loop that creates list for each event
  for (let i = 0; i < keys.length; i++){
    let k = keys[i];
    let event = events[k].subject;
    console.log(k);
    let list = document.createElement('li');
    // Giving attibute to list that redirects to the detail page
    let link = document.createElement('a');
    // Giving unique id to url(template literal)
    link.setAttribute('href', `./eventDetail.html?${k}`);
    // Append event data in the anchor
    link.append(event);
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


