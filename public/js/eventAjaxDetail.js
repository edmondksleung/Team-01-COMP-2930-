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
                ////////// Creating event detail using dom elements /////////
                

            }
            
            // Increases count on join click
        }
    });

});