// AJAX to import data from firebase
$('.cities').click(function () {
    // Grabbing clicked name attribute
    let city = $(this).attr('name');
    $.ajax({
        type: 'GET',
        url: `https://evolunteer-45c5d.firebaseio.com/events/${city}.json`,
        dataType: 'json',
        success: function (data) {
            document.getElementById('location').innerHTML = city.toUpperCase();
            let keys = Object.keys(data);
            console.log(keys);
            // Creating a list of events from firebase
            for (let i = 0; i < keys.length; i++) {
                let k = keys[i];
                let event = data[k].subject;
                let list = document.createElement('li');
                list.append(event);
                let eventsList = document.getElementById('test1');
                eventsList.append(list);
            }
        }
    });

});