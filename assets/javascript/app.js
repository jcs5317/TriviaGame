$(document).ready(function(){
  // value for the timer to 60 seconds
  var number = 60;
    $("#start-button").click(function(){
    // start game
    $("#start-button").on("click", start);  
    // submits answers and finish game
    $("#submit").on("click", finish);
    // restarts games
    $("#restart").on("click", restart);

// functions 
    function start(){
    	counter = setInterval(timer, 1000);
    	showIt(".question");
    	showIt(".answers");
    	showIt("#submit");
	    hideIt("#start-button");
	    hideIt(".rules");
	    hideIt("#restart");
	    hideIt("#results");
    }
    function timer(){
      // decrement the timer by 1
      number-- 
      $("#timer").html("<h2>" + number + "</h2>" );
      if (number === 0){
        alert("Time Up!")
    // call stop function
        stop(); 
      }
    }
    function stop(){
        // timer stops game
    	clearInterval(counter); 
    	$("#results").show();
    	$("#restart").show();
		$(".question").hide();
		$(".answers").hide();
		$("#submit").hide();
    }
    function finish(){
    	number = 1; // if number is equal to 0 number will show -1 so 1 has to be selected
        clearInterval(counter);
        // stops the timer 
    	timer();
    }

    function restart(){
    	number = 60;
    	start();
    }

    function hideMe(e) {
    	$(e).hide();
    }
    function showMe(e) {
    	$(e).show();
    }
//start function call
  	start(); 
  });
});