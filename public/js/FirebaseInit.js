// Initialize Firebase
var config = {
  apiKey: "AIzaSyCjKV-p_CGqxhRcxahylr-6LXUzNax6kek",
  authDomain: "evolunteer-45c5d.firebaseapp.com",
  databaseURL: "https://evolunteer-45c5d.firebaseio.com",
  projectId: "evolunteer-45c5d",
  storageBucket: "evolunteer-45c5d.appspot.com",
  messagingSenderId: "412878968573"
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();
