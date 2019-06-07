
var wins = 0;
var losses = 0;
var score = 0;
var target = genNum(19, 120);


// Global random number function
function genNum(min, max) {
    return Math.floor(Math.random() * (max - min) + (min));
}

// Assign gem random numbers
// var score = parseInt($('#score').html());

$('.gem0').on('click', function () {

    score += parseInt($(this).attr("vault"));
    $('#score').html(score);
    setTimeout(function () { ifScore() });

});

function ifScore() {

    if (score === target) {
        wins++
        alert("You win!!");
        $('#wins').html(wins);
        resetTarget();
        score = 0; 
    }

    // else alert you loose increment losses by 1
    else if (score > target) {
        losses++
        $('#losses').html(losses);
        alert("You lose.");
        resetTarget();
        score = 0;   
    } 
};
$('#reset').on('click', function () {
    wins = 0;
    losses = 0;
    resetTarget()
});

function resetTarget() {
    // Target score
    target = genNum(19, 120);
    $('#target').html(target);
    
    // Times lost 
    $('#losses').html(losses);

    // Times won
    $('#wins').html(wins);

    // Score
    $('#score').html(0);

    $('#gem1').attr("vault", genNum(1, 12));
    $('#gem2').attr("vault", genNum(1, 12));
    $('#gem3').attr("vault", genNum(1, 12));
    $('#gem4').attr("vault", genNum(1, 12));

};
resetTarget();