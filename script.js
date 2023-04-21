// calculate the time elapsed since the last update
var lastUpdate = new Date().getTime();
var time = new Date().getTime() - lastUpdate;
console.log(time);
// make the button elemnts clickable and showing the time elapsed in elements with class "Time_show"
var buttons = document.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    var time_show = document.getElementsByClassName("Time_show");
    for (var j = 0; j < time_show.length; j++) {
      time_show[j].innerHTML = time;
    }
  }
}