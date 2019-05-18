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
                console.log(k);
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
                readMoreBox.append(readMoreButton);
                $(".readMoreButton").text("info");

                /**** stringify's the object key ****/
                
                var objStr = JSON.stringify(k);
                console.log(objStr);
                readMoreButton.setAttribute("id", objStr);

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

                // add key to info box
                // $(".readMoreButton").attr("class", data[k]);


                // Fetching month and day from date format YYYY-MM-DD

                //let dateObj = new Date(data[k].date + " ");
                let tempDate = data[k].date.split("-");
                
                let dateStr = tempDate[1] +"-" + tempDate[2] +"-"+ tempDate[0];
                
                let dateObj = new Date(dateStr);

                // let utcDate = new Date(data[k].date);
                // let dateTest = new Date (utcDate.toUTCString());
                // console.log(dateTest)
                // let canadaDate = new Date(data[k].date).toLocaleString("en-us", {timeZone: "America/Los_Angeles"});
                // let dateObj = new Date(canadaDate);
                // dateObj.getTimezoneOffset();
                let monthString = dateObj.toLocaleString("en-us", {month: "short"});
                let dayInt = dateObj.toLocaleString("en-us", {day: "2-digit"});


                // Putting value into dom element
                $(eventMessage).text(data[k].subject);
                $(month).text(monthString);
                $(day).text(dayInt);
                $(peopleCount).text(data[k].userCount);
                $(credits).text(data[k].credit);


            }
            
            // Increases count on join click
        }
    });

});