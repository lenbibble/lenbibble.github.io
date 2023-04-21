// calculate the time elapsed since the last update
var time = new Date().getTime() - lastUpdate;
// make the button elemnts clickable and showing the time elapsed
var buttons = document.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    this.innerHTML = time + " ms";
  }
}