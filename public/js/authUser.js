let database = firebase.database();
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // Retrieving currently logged in user's uid
    console.log(user.uid);
    let dbref = database.ref(`users/${user.uid}/isOrg`);
    dbref.on('value', function (snap) {
      console.log(snap.val());
      if (!snap.val()) {
        removeElement('navSubmit');
        removeElement('dropSubmit');
      }
    });
  }
});

function removeElement(elementId) {
  // Removes an element from the document
  let element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}