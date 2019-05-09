
var ref = new Firebase('https://evolunteer-45c5d.firebaseio.com/events/Burnaby/');
var now = Date.now();
var cutoff = now - 2 * 60 * 60 * 1000;
var old = ref.orderByChild('timestamp').endAt(cutoff).limitToLast(1);
var listener = old.on('child_added', function(snapshot) {
    snapshot.ref().remove();
});

