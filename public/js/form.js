// Listen for form submission
document.getElementById('post').addEventListener('submit', submitForm);


// Submits the form
function submitForm(e) {
  e.preventDefault();


  // get value from the text fields
  let subject = getInputVal('subject');
  let email = getInputVal('email');
  let content = getInputVal('content');
  let city = getInputVal('city');
  let date  = getInputVal('date');

  // Converts yyyy-mm-dd into millisecond timestamp
  // Parses "-"
  tempDate=date.split("-");
  // Reorganizes format into mm,dd,yyyy and converts into timestamp
  let timeStamp = new Date(tempDate[1]+","+tempDate[2]+","+tempDate[0]).getTime();

  // Saves message
  saveMessage(subject, email, content, city, timeStamp);

  // Shows alert when submitted
  document.querySelector('.alert').style.display = "block";

  // Hide Alert after certain time
  setTimeout(function(){
    document.querySelector('.alert').style.display = "none";
  }, 2000);

  // Resets the form
  document.getElementById('post').reset();

  // Directs to the previous page
  setTimeout(function(){
    window.location.href= `../public/eventList.html?city=${city}`;
  }, 3000);
}


// function to grab value from input  
function getInputVal(id) {
  return document.getElementById(id).value;
}


// save message to firebase
function saveMessage(subject, email, content, city, timeStamp){
  let newMessageRef = firebase.database().ref('events/' + city).push();
  newMessageRef.set({
    subject: subject,
    email: email,
    content: content,
    city: city,
    timeStamp: timeStamp
  });

  // // save message to firebase under current user
  // let currUser = firebase.auth().currentUser;
  // let newMessageRef2 = firebase.database().ref('users/' + currUser).push();
  // newMessageRef2.set({
  //   subject: subject,
  //   email: email,
  //   content: content,
  //   city: city,
  //   timeStamp: timeStamp
  // });
}

