
var targetScore = 'target';
var youLost = 'losses';
var youWin = 'wins';
var myScore = 'score';


// Target score
$('#target').html(genNum(19, 120));
// Times lost 
$('#losses').html(0);

// Times won
$('#wins').html(0);

// Score
$('#score').html(0);

// Gems
$('#gem1').html(genNum(1, 12));
$('#gem2').html(genNum(1, 12));
$('#gem3').html(genNum(1, 12));
$('#gem4').html(genNum(1, 12));

// Assign gem random numbers
$('#gem1').on('click', function () {
    var score = parseInt($('#score').html());
    score += parseInt($(this).html());
    $('#score').html(score);
    if( score === target)youWin();
});

$('#gem2').on('click', function () {
    var score = parseInt($('#score').html());
    score += parseInt($(this).html());
    $('#score').html(score);

});

$('#gem3').on('click', function () {
    var score = parseInt($('#score').html());
    score += parseInt($(this).html());
    $('#score').html(score);
});

$('#gem4').on('click', function () {
    var score = parseInt($('#score').html());
    score += parseInt($(this).html());
    $('#score').html(score);
});

// Global random number function
function genNum(min, max) {
    return Math.floor(Math.random() * (max - min) + (min));
}

function youWin(wins, losses) {
    var score = parseInt($('#score').html());
    score += parseInt($(this).html());
    
};

