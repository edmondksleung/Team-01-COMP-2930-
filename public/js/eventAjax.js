// AJAX to import data from firebase
$('.cities').click(function () {
    // Grabbing clicked name attribute
    let city = $(this).attr('name');
    console.log(city);
    $.ajax({
        type: 'GET',
        url: `https://evolunteer-45c5d.firebaseio.com/events/${city}.json`,
        dataType: 'json',
        success: function (data) {
            let keys = Object.keys(data);
            console.log(keys);
            // Creating a list of events from firebase
            for (let i = 0; i < keys.length; i++) {

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
                events.append(credits);

                let eventPicBox = document.createElement('div');
                eventPicBox.setAttribute('class', 'eventPicBox');
                credits.after(eventPicBox);

                let readMoreBox = document.createElement('div');
                readMoreBox.setAttribute('class', 'readMoreBox');
                eventPicBox.append(readMoreBox);

                let emptyDiv = document.createElement('div');
                readMoreBox.append(emptyDiv);

                let readMoreButton = document.createElement('button');
                readMoreButton.setAttribute('class', 'readMoreButton');
                readMoreBox.append(readMoreButton);

                let previewBox = document.createElement('div');
                previewBox.setAttribute('class', 'previewBox');
                events.after(previewBox);

                let date = document.createElement('div');
                date.setAttribute('class', 'date');
                previewBox.append(date);

                let month = document.createElement('p');
                month.setAttribute('id', 'month');
                date.append(month);

                let day = document.createElement('p');
                day.setAttribute('id', 'day');
                date.append(day);

                let eventMessage = document.createElement('div');
                date.setAttribute('class', 'eventMessage');
                previewBox.append(eventMessage);

                let peopleBox = document.createElement('div');
                peopleBox.setAttribute('class', 'peopleBox');
                previewBox.append(peopleBox);

                let peoplePic = document.createElement('img');
                peoplePic.setAttribute('src', './Images/people.png');
                peoplePic.setAttribute('id', 'peoplePic');
                peopleBox.append(peoplePic);

                let peopleCount = document.createElement('p');
                peopleCount.setAttribute('id', 'peopleCount');
                peopleBox.append(peopleCount);

                // Putting value into dom element
                let k = keys[i];
                eventMessage.innerHTML = data[k].subject;

            }
        }
    });

});