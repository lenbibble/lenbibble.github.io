// make document update every 1000ms and record the time of last update

var i = 0;
var lastUpdate = new Date().getTime();
setInterval(function() {
    lastUpdate = new Date().getTime();
    i++;
    document.getElementById("counter").innerHTML = i;
}, 1000);

var time = new Date().getTime() - lastUpdate;
console.log(time);
// make the button with id 'show_time' clickable and showing the time elapsed in elements with id "Time_show"
document.getElementById("show_time").onclick = function() {
    document.getElementById("Time_show").innerHTML = time;
};