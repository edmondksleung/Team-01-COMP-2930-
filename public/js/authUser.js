let database = firebase.database();
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // Retrieving currently logged in user's uid
    console.log(user.uid);
    let dbref = database.ref(`users/${user.uid}/isOrg`);
    dbref.on('value', function (snap) {
      console.log(snap.val());
      if (!snap.val()) {
        // document.getElementById('globeLogo').style.display = "none";
      }
    });
  }
});