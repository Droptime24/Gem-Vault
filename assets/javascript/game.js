
var wins = 0;
var losses = 0;
var score = 0;
var target = (genNum(19, 120));


// Target score
$('#target').html(target);

// Times lost 
$('#losses').html(losses);

// Times won
$('#wins').html(wins);

// Score
$('#score').html(0);

// Gems
$('#gem1').html(genNum(1, 12));
$('#gem2').html(genNum(1, 12));
$('#gem3').html(genNum(1, 12));
$('#gem4').html(genNum(1, 12));



// Global random number function
function genNum(min, max) {
    return Math.floor(Math.random() * (max - min) + (min));
}

// Assign gem random numbers
var score = parseInt($('#score').html());
$('#gem1').on('click', function () {

    score += parseInt($(this).html());
    youWin();
    $('#score').html(score);
});

$('#gem2').on('click', function () {

    score += parseInt($(this).html());
    youWin();
    $('#score').html(score);
});

$('#gem3').on('click', function () {
    score += parseInt($(this).html());
    youWin();
    $('#score').html(score);
});

$('#gem4').on('click', function () {
    score += parseInt($(this).html());
    youWin();
    $('#score').html(score);
});

// when score reaches the target score increment wins by 1
function youWin() {
    if (score === target) {
        wins++
        $('#wins').html(wins);
        alert("You win!!");
        score = 0;
        
    }

    // else alert you loose increment losses by 1
    else if (score > target) {
        losses++
        alert("You lose.");
        $('#losses').html(losses);
        score = 0;
    
    }
}





