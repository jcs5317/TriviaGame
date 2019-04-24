/*timer count down to end of game
window.onload = function() {

};*/
//set number counter to 100
var counter = 0;
var timeleft = 100;

function convertSeconds(s) {
    var min = floor(s / 60);
    var sec = s % 60;
}
/*function setup() {
    noCanvas();
}*/

var timer = select('#timer');
timer.html(convertSeconds(timeleft - counter));

function timeIt(){
    counter++;
    timer.html(convertSeconds(timeLeft - counter));
}
setInterval(timeIt, 1000);
//var that will store interval ID when game starts
var intervalId;