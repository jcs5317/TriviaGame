
/*timer count down to end of game
window.onload = function() {

};*/
//set number counter to 100
// var counter = 0;
var timeleft = 10;

// function convertSeconds(s) {
//     var min = floor(s / 60);
//     var sec = s % 60;
// }
/*function setup() {
    noCanvas();
}*/

//var timer = select('#timer');
//timer.html(convertSeconds(timeleft - counter));
function timeIt(){
    timeleft--;
    // timeleft = timeleft - counter
    // timer.html(timeleft - counter);
    $("#timer").text(timeleft)
}
setInterval(timeIt, 1000);
function timeReset(){
    timeleft = 0
}
//var that will store interval ID when game starts
var intervalId;