// Reset button to reset the form
$('#reset').on('click', function(){
	document.getElementById('submitForm').reset();
})

// Listen for form submission
document.getElementById('submitForm').addEventListener('submit', submitForm);
$('.navigation').on('click', function () {
	// Resets the form
	document.getElementById('submitForm').reset();
})

// Submits the form
async function submitForm(e) {
	e.preventDefault();

	// get value from the text fields
	let eventName = getInputVal('eventName');
	let organization = getInputVal('organization');
	let email = getInputVal('email');
	let address = getInputVal('address');
	let city = getInputVal('city');
	let date = getInputVal('date');
	let content = getInputVal('description');
	let startTime = getInputVal('startTime');
	let endTime = getInputVal('endTime');

	// Converts yyyy-mm-dd into millisecond timestamp
	// Parses "-"
	tempDate = date.split("-");
	//date = tempDate[1] +"-" + tempDate[2] +"-"+ tempDate[0];

	// Reorganizes format into mm,dd,yyyy and converts into timestamp
	let timeStamp = new Date(tempDate[1] + "," + tempDate[2] + "," + tempDate[0]).getTime();

	// Saves message
	await handleFileUploadSubmit(eventName, organization, email, address, content, city, date, timeStamp, startTime, endTime);

	// Shows alert when submitted
	document.querySelector('.alert').style.display = "block";

	// Hide Alert after certain time
	setTimeout(function () {
		document.querySelector('.alert').style.display = "none";
	}, 2000);

	// Resets the form
	document.getElementById('submitForm').reset();

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
function saveMessage(eventName, organization, email, address, content, city, date, timeStamp, imgurl, startTime, endTime) {

	newMessageRef = firebase.database().ref('events/' + city).push();
	newMessageRef.set({
		eventName: eventName,
		organization: organization,
		email: email,
		address: address,
		content: content,
		city: city,
		date: date,
		timeStamp: timeStamp,
		imgurl: imgurl,
		startTime: startTime,
		endTime: endTime
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
var selectedFile = new File([''], "../Images/no-images.png");

document.querySelector('#photo').addEventListener('change', handleFileUploadChange);
// document.querySelector('#submit').addEventListener('click', handleFileUploadSubmit);
document.getElementById('submitForm').addEventListener('submit', submitForm);


function handleFileUploadChange(event) {
	selectedFile = event.target.files[0];
};


// Uploading Image to the storage
async function handleFileUploadSubmit(eventName, organization, email, address, content, city, date, timeStamp, startTime, endTime) {

	let uploadTask = storageRef.child(`eventImages/${selectedFile.name}`).put(selectedFile);
	debugger
	//create a child directory called images, and place the file inside this directory
	uploadTask.on('state_changed', (snapshot) => {
		// Observe state change events such as progress, pause, and resume
	}, (error) => {
		// Handle unsuccessful uploads
		console.log(error);
	}, () => {
		// Do something once upload is complete
		uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
			saveMessage(eventName, organization, email, address, content, city, date, timeStamp, downloadURL, startTime, endTime);
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