// Reference messages collection
let messagesRef = firebase.database().ref('events');


// Listen for form submission
document.getElementById('post').addEventListener('submit', submitForm);


// Submits the form
function submitForm(e) {
  e.preventDefault();


  // get value from the text fields
  let subject = getInputVal('subject');
  let email = getInputVal('email');
  let content = getInputVal('content');


  // Saves message
  saveMessage(subject, email, content);

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
    window.location.href= '../public/eventList.html';
  }, 3000);
}


// function to grab value from input
function getInputVal(id) {
  return document.getElementById(id).value;
}


// save message to firebase
function saveMessage(subject, email, content){
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    subject: subject,
    email: email,
    content: content
  });
}