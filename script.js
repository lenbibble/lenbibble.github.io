// calculate the time elapsed since the last update
var time = new Date().getTime() - lastUpdate;
// make the a elemnts clickable and showing the time elapsed
var a = document.getElementsByTagName("a");
for (var i = 0; i < a.length; i++) {
    a[i].onclick = function() {
        alert("You have been on this page for " + time + " milliseconds.");
    };
} 