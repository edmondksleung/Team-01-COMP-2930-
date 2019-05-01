// Reference messages collection
var messagesRef = firebase.database().ref('events');


// Listen for form submission
document.getElementById('post').addEventListener('submit', submitForm);


// Submits the form
function submitForm(e) {
  e.preventDefault();


  // get value from the text fields
  var subject = getInputVal('subject');
  var email = getInputVal('email');
  var content = getInputVal('content');


  // Saves message
  saveMessage(subject, email, content);

  // Shows alert when submitted
  document.querySelector('.alert').style.display = "block";

  // Hide Alert after certain time
  setTimeout(function(){
    document.querySelector('.alert').style.display = "none";
  }, 3000);

  // Resets the form
  document.getElementById('post').reset();

  // Directs to the previous page
  setTimeout(function(){
    window.location.href= '../public/index.html';
  }, 3000);
}


// function to grab value from input
function getInputVal(id) {
  return document.getElementById(id).value;
}


// save message to firebase
function saveMessage(subject, email, content){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    subject: subject,
    email: email,
    content: content
  });
}