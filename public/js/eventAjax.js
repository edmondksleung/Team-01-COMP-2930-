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
                events.append(credits);

                let eventPicBox = document.createElement('div');
                eventPicBox.setAttribute('class', 'eventPicBox');
                eventPicBox.style.backgroundImage = `url(${data[k].imgurl})`
                credits.after(eventPicBox);

                let readMoreBox = document.createElement('div');
                readMoreBox.setAttribute('class', 'readMoreBox');
                eventPicBox.append(readMoreBox);

                // let eventPic = document.createElement('img');
                // eventPic.setAttribute('class', 'eventPic');
                // eventPic.setAttribute('src', data[k].imgurl);
                // eventPicBox.append(eventPic);
                // console.log(data[k].imgurl);

                let emptyDiv = document.createElement('div');
                readMoreBox.append(emptyDiv);

                let readMoreButton = document.createElement('button');
                readMoreButton.setAttribute('class', 'readMoreButton');
                $(".readMoreButton").text("info");
                readMoreBox.append(readMoreButton);

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
                peopleBox.append(peopleCount);

                // Putting value into dom element
                $(eventMessage).text(data[k].subject);
                $(month).text(data[k].month);
                $(day).text(data[k].day);
                $(peopleCount).text(data[k].userCount);                

            }
            
            // Increases count on join click
        }
    });

});