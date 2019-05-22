// AJAX to import data from firebase (list of events)
$(document).ready(function () {
    $(document).on("click", ".cities", function (e) {
        e.preventDefault();
        // resetting DOM element in the page
        $('.allEventsBox').empty();

        // Grabbing clicked name attribute
        let city = $(this).attr('name');
        let locationName = $('.eventsLocationOpaqueCover');
        $(locationName).text(city);

        /* close detail button */
        $(document).on("click", ".closeDetailsButton", function () {
            $(".eventsBox").show();
            $(".eventsInfoBox").hide();
            $(".eventsLocationOpaqueCover").show(); /*key null*/
        })

        // Creating DOM elements and fetching information from firebase
        $.ajax({
            type: 'GET',
            url: `https://evolunteer-45c5d.firebaseio.com/events/${city}.json`,
            dataType: 'json',
            success: function (data) {

                let keys = Object.keys(data);
                // console.log("whats this " + keys);

                // Creating a list of events from firebase
                for (let i = 0; i < keys.length; i++) {
                    // Putting value into dom element
                    let k = keys[i];

                    ////////// Creating event box using dom elements /////////
                    let allEventsBox = $('.allEventsBox');
                    let eventsBox = document.createElement('div');
                    eventsBox.setAttribute('class', 'eventsBox');
                    allEventsBox.append(eventsBox);

                    let events = document.createElement('div');
                    events.setAttribute('class', 'events');
                    eventsBox.append(events);

                    let credits = document.createElement('div');
                    credits.setAttribute('class', 'credits');
                    credits.innerHTML = ' Hour Credit';
                    events.append(credits);

                    let creditNum = document.createElement('span');
                    creditNum.setAttribute('class', 'creditNum');
                    credits.prepend(creditNum);

                    let eventPicBox = document.createElement('div');
                    eventPicBox.setAttribute('class', 'eventPicBox');
                    eventPicBox.style.backgroundImage = `url(${data[k].imgurl})`
                    credits.after(eventPicBox);

                    let readMoreBox = document.createElement('div');
                    readMoreBox.setAttribute('class', 'readMoreBox');
                    eventPicBox.append(readMoreBox);

                    let emptyDiv = document.createElement('div');
                    readMoreBox.append(emptyDiv);

                    let readMoreButton = document.createElement('button');
                    readMoreButton.setAttribute('class', 'readMoreButton');
                    readMoreBox.append(readMoreButton);
                    $(".readMoreButton").text("More Info");

                    /* create DETAILED event from firebase */
                    let eventsInfoBox = document.createElement("div");
                    $(eventsInfoBox).attr("class", "eventsInfoBox");
                    $(".allEventsBox").append(eventsInfoBox);

                    let detailsTopBox = document.createElement("div");
                    $(detailsTopBox).attr("class", "detailsTopBox");
                    eventsInfoBox.append(detailsTopBox);

                    let closeDetailsBox = document.createElement("div");
                    $(closeDetailsBox).attr("class", "closeDetailsBox");
                    $(detailsTopBox).append(closeDetailsBox);

                    let closeDetailsButton = document.createElement("img");
                    $(closeDetailsButton).attr("class", "closeDetailsButton");
                    $(closeDetailsButton).attr("src", "Images/close.png");
                    $(closeDetailsButton).attr("alt", "close");
                    $(closeDetailsBox).append(closeDetailsButton);

                    let eventInfoPic = document.createElement("img");
                    $(eventInfoPic).attr("class", "eventInfoPic");
                    $(eventInfoPic).attr("alt", "eventImage");
                    $(detailsTopBox).append(eventInfoPic);
                    $(eventInfoPic).attr("src", `${data[k].imgurl}`);

                    let eventInfoTitle = document.createElement("div");
                    $(eventInfoTitle).attr("class", "eventInfoTitle");
                    $(eventsInfoBox).append(eventInfoTitle);

                    let specialInfoBox = document.createElement("div");
                    $(specialInfoBox).attr("class", "specialInfoBox");
                    $(eventsInfoBox).append(specialInfoBox);

                    let locationInfoBox = document.createElement("div");
                    $(locationInfoBox).attr("class", "locationInfoBox");
                    $(specialInfoBox).append(locationInfoBox);

                    /* location */
                    let locationPic = document.createElement("img");
                    $(locationPic).attr("class", "locationPic");
                    $(locationPic).attr("src", "./Images/location.png");
                    $(locationPic).attr("alt", "loc");
                    $(locationInfoBox).append(locationPic);

                    var locationInfo = document.createElement("div");
                    $(locationInfo).attr("class", "locationInfo");
                    $(locationInfoBox).append(locationInfo);

                    /* date */
                    let dateTimeInfoBox = document.createElement("div");
                    $(dateTimeInfoBox).attr("class", "dateTimeInfoBox");
                    $(specialInfoBox).append(dateTimeInfoBox);

                    /* you spelt calendar wrong and wasted 2 hours of my life shane */

                    let calenderPic = document.createElement("img");
                    $(calenderPic).attr("class", "calenderPic");
                    $(calenderPic).attr("src", "./Images/calender.png");
                    $(calenderPic).attr("alt", "cal");
                    $(dateTimeInfoBox).append(calenderPic);

                    let dateTime = document.createElement("div");
                    $(dateTime).attr("class", "dateTime");
                    $(dateTimeInfoBox).append(dateTime);

                    let dateInfo = document.createElement("div");
                    $(dateInfo).attr("class", "dateInfo");
                    $(dateTime).append(dateInfo);

                    let timeInfo = document.createElement("div");
                    $(timeInfo).attr("class", "timeInfo");
                    $(dateTime).append(timeInfo);

                    /* organizer info box */
                    let organizerInfoBox = document.createElement("div");
                    $(organizerInfoBox).attr("class", "organizerInfoBox");
                    $(specialInfoBox).append(organizerInfoBox);

                    let organizerPic = document.createElement("img");
                    $(organizerPic).attr("class", "organizerPic");
                    $(organizerPic).attr("src", "./Images/organizer.png");
                    $(organizerPic).attr("alt", "org");
                    $(organizerInfoBox).append(organizerPic);

                    let organizerInfo = document.createElement("div");
                    $(organizerInfo).attr("class", "organizerInfo");
                    $(organizerInfoBox).append(organizerInfo);

                    /* email */
                    let emailInfoBox = document.createElement("div");
                    $(emailInfoBox).attr("class", "emailInfoBox");
                    $(specialInfoBox).append(emailInfoBox);

                    let emailPic = document.createElement("img");
                    $(emailPic).attr("class", "emailPic");
                    $(emailPic).attr("src", "./Images/email.png");
                    $(emailPic).attr("alt", "email");
                    $(emailInfoBox).append(emailPic);

                    let emailInfo = document.createElement("div");
                    $(emailInfo).attr("class", "emailInfo");
                    $(emailInfoBox).append(emailInfo);

                    /* people count */
                    let peopleCountBox = document.createElement("div");
                    $(peopleCountBox).attr("class", "peopleCountBox");
                    $(specialInfoBox).append(peopleCountBox);

                    let pplPic = document.createElement("img");
                    $(pplPic).attr("class", "peoplePic");
                    $(pplPic).attr("src", "./Images/people.png");
                    $(pplPic).attr("alt", "count");
                    $(peopleCountBox).append(pplPic);

                    let count = document.createElement("div");
                    $(count).attr("class", "count");
                    $(count).attr("id", k);
                    $(peopleCountBox).append(count);

                    /* credits box */
                    let creditsBox = document.createElement("div");
                    $(creditsBox).attr("class", "creditsBox");
                    $(specialInfoBox).append(creditsBox);

                    let creditsPic = document.createElement("img");
                    $(creditsPic).attr("class", "creditsPic");
                    $(creditsPic).attr("src", "./Images/star.png");
                    $(creditsPic).attr("alt", "credits");
                    $(creditsBox).append(creditsPic);


                    let detailCredits = document.createElement("div");
                    $(detailCredits).attr("class", "detailCredits");
                    $(creditsBox).append(detailCredits);

                    let detailHours = document.createElement("div");
                    $(detailHours).text("Hours Credit");
                    $(creditsBox).append(detailHours);

                    /* description */
                    let infoDescriptionBox = document.createElement("div");
                    $(infoDescriptionBox).attr("class", "infoDescriptionBox");
                    $(eventsInfoBox).append(infoDescriptionBox);

                    let desc = document.createElement("div");
                    $(desc).text("description success");
                    $(infoDescriptionBox).append(desc);

                    /* footer */
                    let footer = document.createElement("footer");
                    $(eventsInfoBox).append(footer);

                    /* join button */
                    let joinEventButtonBox = document.createElement("div");
                    $(joinEventButtonBox).attr("class", "joinEventButtonBox");
                    $(footer).append(joinEventButtonBox);

                    let joinEventButton = document.createElement("button");
                    $(joinEventButton).attr("class", "joinEventButton");
                    $(joinEventButton).text("Join Event");
                    $(joinEventButtonBox).append(joinEventButton);

                    /**** returns string of the object key and adds the string to an id ****/
                    let objStr = JSON.stringify(k);

                    // regex to replace double quotes with nothing
                    noQuotations = objStr.replace(/\"/g, "");
                    $(readMoreButton).attr("id", noQuotations);
                    $(eventsBox).attr("id", noQuotations);
                    $(eventsInfoBox).attr("id", noQuotations);

                    // preview box 
                    let previewBox = document.createElement('div');
                    previewBox.setAttribute('class', 'previewBox');
                    eventsBox.append(previewBox);

                    let date = document.createElement('div');
                    date.setAttribute('class', 'date');
                    previewBox.append(date);

                    let month = document.createElement('p');
                    month.setAttribute('class', 'month');
                    date.append(month);

                    let day = document.createElement('p');
                    day.setAttribute('class', 'day');
                    date.append(day);

                    let eventMessage = document.createElement('div');
                    eventMessage.setAttribute('class', 'eventMessage');
                    previewBox.append(eventMessage);

                    let peopleBox = document.createElement('div');
                    peopleBox.setAttribute('class', 'peopleBox');
                    previewBox.append(peopleBox);

                    let peoplePic = document.createElement('img');
                    peoplePic.setAttribute('src', './Images/people.png');
                    peoplePic.setAttribute('class', 'peoplePic');
                    peopleBox.append(peoplePic);

                    let peopleCount = document.createElement('p');
                    peopleCount.setAttribute('class', 'peopleCount');
                    $(peopleCount).attr("id", k);
                    peopleBox.append(peopleCount);

                    // Fetching month and day from date format YYYY-MM-DD
                    let tempDate = data[k].date.split("-");
                    let dateStr = tempDate[1] + "-" + tempDate[2] + "-" + tempDate[0];
                    let dateObj = new Date(dateStr);
                    let monthString = dateObj.toLocaleString("en-us", {
                        month: "short"
                    });
                    let dayInt = dateObj.toLocaleString("en-us", {
                        day: "2-digit"
                    });

                    // Time credit calculation from start time to end time
                    let startTime = toHours(data[k].startTime);
                    let endTime = toHours(data[k].endTime);
                    var timeCred = new Number(endTime - startTime).toFixed(1);

                    // Putting value into dom element
                    $(eventMessage).text(data[k].eventName);
                    $(month).text(monthString);
                    $(day).text(dayInt);
                    $(dateInfo).text(monthString);
                    $(timeInfo).text(dayInt);
                    $(eventInfoTitle).text(data[k].eventName);

                    // Putting key into dom element
                    $(eventMessage).text(data[k].eventName);
                    $(creditNum).text(timeCred);
                    $(".detailCredits").text(timeCred);

                    function toHours(timeStr1) {
                        let hr = timeStr1.substr(0, timeStr1.indexOf(":"));
                        let min = timeStr1.substr(timeStr1.indexOf(":") + 1, timeStr1.length);
                        hr = parseInt(hr);
                        min = parseInt(min);
                        let time = hr + (min / 60);
                        return time;
                    }

                    // Counts the number of unique keys under usersJoined on firebase and sets it to the web DOM
                    let countChildRef = firebase.database().ref('events/' + city + '/' + k + '/usersJoined/');
                    console.log(city + k);
                    countChildRef.on("value", function (snapshot) {
                        let numOfParticipants = snapshot.numChildren();
                        console.log(numOfParticipants);
                        $(`.peopleCount#${k}`).text(numOfParticipants);
                        $(`.count#${k}`).text(numOfParticipants);
                        // console.log(k);
                    });
                }
            }
        });
    });
    // Button on click and displays the detailed information onto web DOM
    $(document).on("click", ".readMoreButton", function (e) {
        e.preventDefault();
        let key = $(this).attr("id");
        let city = $(".eventsLocationOpaqueCover").text();
        $.ajax({
            type: 'GET',
            url: `https://evolunteer-45c5d.firebaseio.com/events/${city}/${key}.json`,
            dataType: 'json',
            success: function (data) {
                // adds data from firebase onto event details
                $(`.eventsBox`).hide();
                $(`.eventsInfoBox#${key}`).show();
                // $(`.eventsLocation`).hide(); /*key null*/
                $(".locationInfo").text(data.address);
                $(".organizerInfo").text(data.organization);
                $(".emailInfo").text(data.email);
                $(".infoDescriptionBox").text(data.content);
                // console.log(str);

            }
        });
        $.ajax({
            type: 'GET',
            url: `https://evolunteer-45c5d.firebaseio.com/events/${city}/${key}/usersJoined.json`,
            dataType: 'json',
            success: function (data) {
                var x = Object.keys(data);
                var currentUser = firebase.auth().currentUser.uid;
                console.log(x);
                // debugger
                for (let i = 0; i < x.length; i++) {

                    let uid = x[i];
                    if (uid === currentUser) {
                        $(".joinEventButton").text("Event Joined");
                        $(document).on("click", ".joinEventButton", function(e){
                            e.preventDefault();
                            $(".joinEventButton").text("Join Event");
                            // $.ajax({
                            //     type: 'GET',
                            //     url: `https://evolunteer-45c5d.firebaseio.com/events/${city}/${key}/usersJoined.json`,
                            //     dataType: 'json',
                            //     success: function(data){
                                    
                            //     }
                            // })
                            let userRef = firebase.database().ref('events/' + city + '/' + key + '/usersJoined/' + currentUser);
                            userRef.remove();
                        })
                    } else {
                        // On join event button, event writes to database 
                        $(document).on("click", ".joinEventButton", function (e) {
                            e.preventDefault();
                            
                            let user = firebase.auth().currentUser;
                            let userID = user.uid;

                            let a = firebase.database().ref(`users/${userID}`);
                            let b = firebase.database().ref('events/' + city + '/' + key + '/usersJoined/');

                            if (user) {
                                a.on("value", function (snapshot) {
                                    //sets snapshot of current user info in new node under event
                                    b.child(`${userID}`).set(snapshot.val());
                                    $(".joinEventButton").text("Event Joined");
                                });
                            } else {
                                console.log("Setting of user info under event unsuccessful.")
                            }
                            
                        });
                    }
                }
            }
        })
    });
});