$(document).ready(function(){
  // value for the timer to 60 seconds
  var number = 30;
    $("#start-button").click(function(){
    // start game
    $("#start-button").on("click", start);  
    // submits answers and finish game
    $("#submit").on("submit", function(event){
        event.preventDefault();
    });
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
        $(".timeRemaining").html("<h3> TIME Drink Up! </h3>");
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
    	number = 30;
    	start();
    }

    function hideIt() {
    	$().hide();
    }
    function showIt() {
    	$().show();
    }
//start function call
  	start(); 
  });
});
{    $("#results").click(function() {                

    if (!$("input[@name=q1]:checked").val() ||            
    !$("input[@name=q2]:checked").val() ||            
    !$("input[@name=q3]:checked").val() ||            
    !$("input[@name=q4]:checked").val() ||            
    !$("input[@name=q5]:checked").val()                        
    ) {            
    alert("Keep answering!");        
    }        
    
    else {            
    var cat1name = "1";            
    var cat2name = "2";            
    var cat3name = "3";            
    var cat4name = "4";            
    var cat5name = "5";                       
    var cat11name = "None";            
                
    
    var cat1 = ($("input[@name=q1]:checked").val() != "a"); 
               
    var cat2 = ($("input[@name=q2]:checked").val() != "b");  
    
    var cat3 = ($("input[@name=q3]:checked").val() != "c");  
    
    var cat4 = ($("input[@name=q4]:checked").val() != "d");  
    
    var cat5 = ($("input[@name=q5]:checked").val() != "a");  
    
    var cat6 = (!cat1 && !cat2 && !cat3 && !cat4 && !cat5); var categories = [];                        
    
    if (cat1) { categories.push(cat1name) };            
    if (cat2) { categories.push(cat2name) };            
    if (cat3) { categories.push(cat3name) };            
    if (cat4) { categories.push(cat4name) };            
    if (cat5) { categories.push(cat5name) };            
    if (cat6) { categories.push(cat6name) };                                    
    var catStr = 'You answered the following questions incorrectly: ' + categories.join(', ') + '';                     
    $("#categorylist").text(catStr);                        
    $("#categorylist").show("slow");            
    
    if (cat1) { $("#category1").show("slow"); };            
    if (cat2) { $("#category2").show("slow"); };            
    if (cat3) { $("#category3").show("slow"); };            
    if (cat4) { $("#category4").show("slow"); };            
    if (cat5) { $("#category5").show("slow"); };            
    if (cat6) { $("#category6").show("slow"); };            
    { $("#closing").show("slow"); };
    }
    });};