// Listen for form submission
// document.getElementById('post').addEventListener('submit', submitForm);

// Submits the form
async function submitForm(e) {
	e.preventDefault();

	// get value from the text fields
	let subject = getInputVal('subject');
	let email = getInputVal('email');
	let content = getInputVal('content');
	let city = getInputVal('city');
	let date = getInputVal('date');

	// Converts yyyy-mm-dd into millisecond timestamp
	// Parses "-"
	tempDate = date.split("-");
	
	// Reorganizes format into mm,dd,yyyy and converts into timestamp
	let timeStamp = new Date(tempDate[1] + "," + tempDate[2] + "," + tempDate[0]).getTime();

	// Saves message
	await handleFileUploadSubmit(subject, email, content, city, timeStamp);

	// Shows alert when submitted
	document.querySelector('.alert').style.display = "block";

	// Hide Alert after certain time
	setTimeout(function () {
		document.querySelector('.alert').style.display = "none";
	}, 2000);

	// Resets the form
	document.getElementById('post').reset();

	// Directs to the previous page
	// setTimeout(function () {
	// 	window.location.href = `../public/eventList.html?city=${city}`;
	// }, 3000);
}


// function to grab value from input
function getInputVal(id) {
	return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(subject, email, content, city, timeStamp, imgurl) {

	newMessageRef = firebase.database().ref('events/' + city).push();
	newMessageRef.set({
		subject: subject,
		email: email,
		content: content,
		city: city,
		timeStamp: timeStamp,
		imgurl: imgurl
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




// Uploading Image to the storage
let storageRef = firebase.storage().ref();


document.querySelector('#fileButton').addEventListener('change', handleFileUploadChange);
// document.querySelector('#submit').addEventListener('click', handleFileUploadSubmit);
document.getElementById('post').addEventListener('submit', submitForm);

let selectedFile;
function handleFileUploadChange(event) {
	selectedFile = event.target.files[0];
};


// Uploading Image to the storage
function handleFileUploadSubmit(subject, email, content, city, timeStamp) {

	const uploadTask = storageRef.child(`eventImages/${selectedFile.name}`).put(selectedFile);
	//create a child directory called images, and place the file inside this directory
	uploadTask.on('state_changed', (snapshot) => {
		// Observe state change events such as progress, pause, and resume
	}, (error) => {
		// Handle unsuccessful uploads
		console.log(error);
	}, () => {
		// Do something once upload is complete
		uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
			saveMessage(subject, email, content, city, timeStamp, downloadURL);
		})
	});

	// uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
	// 	console.log('File available at', downloadURL);
	// 	// let updates = {};
	// 	// let postData = {
	// 	// 	imgurl: downloadURL
	// 	// };
	// 	// updates['/events/'] = postData;
	// 	// firebase.database().ref().update(updates);
	// 	return downloadURL;

	// });
};