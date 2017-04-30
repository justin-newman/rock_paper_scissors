$(document).ready(function () { 
    var win = 0;
    var loss = 0;
    var tie = 0;
    var player1;
    var player2;
    var rps = [ "Rock!", "Paper!", "Scissors!" ];
    var newGameBtn = $('')

    $('.col').mouseenter( function() {
        $(this).addClass('pulse');
    });

    $('.col').mouseleave( function() {
        $(this).removeClass('pulse');
    });

    function determineWinner(player1, player2) {
        if (player1 === player2) {
            ++tie;
        }
        else if ( (player1 === 'Rock!' && player2 === 'Paper!') || (player1 === 'Paper!' && player2 === 'Scissors!') || (player1 === 'Scissors!' && player2 === 'Rock!') ) {
            ++loss;
        }
        else if ( (player1 === 'Rock!' && player2 === 'Scissors!') || (player1 === 'Paper!' && player2 === 'Rock!') || (player1 === 'Scissors!' && player2 === 'Paper!') ) {
            ++win;
        }
        else {
            console.log('error!');
        }
        $('#score').text( win + ' WINS' + ' - ' + tie + ' TIES' + ' - ' + loss + ' LOSSES');
    }

    function computerChoice() {
        var result = Math.floor(Math.random()*3);
        $('#result2').text(
            rps[result]
        );
        player2 = rps[result];
        determineWinner(player1, player2);
    }

    $('.rps').click( function() {
        $('#result1').text(
            $(this).text()
        );
        player1 = $(this).text();
        computerChoice();
    });

});