$(document).ready(function () { 
    var win = 0;
    var loss = 0;
    var tie = 0;
    var player1;
    var player2;
    var rps = [ "Rock!", "Paper!", "Scissors!" ];



    function determineWinner(player1, player2) {
        if (player1 === player2)
            return ++tie;
        else {
            switch (winner) {
                case player1 === 0 && player2 === 1:
                    return ++loss;
                case player1 === 0 && player2 === 2:
                    return ++win;
                case player1 === 1 && player2 === 0:
                    return ++win;
                case player1 === 1 && player2 === 2:
                    return ++loss;
                case player1 === 2 && player2 === 0:
                    return ++loss;
                case player1 === 2 && player2 === 1:
                    return ++win;
            }
        }
    }

    function computerChoice() {
        var result = Math.floor(Math.random()*3);

    }

    $('.rps').click( function() {
        $('#result1').text(
            $(this).text()
        );
        player1 = $(this).text();
        computerChoice();
    });




});