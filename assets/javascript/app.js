$(document).ready(function () {
    // value for the timer to 30 seconds
    $("#results").hide();
    $("#restart").hide();
    $(".question").hide();
    $(".answers").hide();
    $("#submit").hide();
    var number = 30;
    $("#start-button").click(function () {
        // start game
        $("#start-button").on("click", start);
        // submits answers and finish game
        $("#submit").on("submit", function (event) {
            event.preventDefault();
        });
        // restarts games
        $("#restart").on("click", restart);

        // functions 
        function start() {
            counter = setInterval(timer, 1000);
            $("#results").hide();
            $("#restart").hide();
            $(".question").show();
            $(".answers").show();
            $("#submit").show();

        }
        function timer() {
            // decrement the timer by 1
            number--
            $("#timer").html("<h2>" + number + "</h2>");
            if (number === 0) {
                $(".timeRemaining").html("<h3> TIME Drink Up! </h3>");
                // call stop function
                stop();
            }
        }
        function stop() {
            // timer stops game
            clearInterval(counter);
            $("#results").show();
            $("#restart").show();
            $(".question").hide();
            $(".answers").hide();
            $("#submit").hide();
            $("#start-button").hide();
        }
        function finish() {
            number = 1; // need to check answers and show results before restart
            clearInterval(counter);
            if ("radio")
                // stops the timer 
                timer();
        }

        function restart() {
            number = 30;
            start();
        }


        start();
    });
});
