var players = ["Kobe Bryant", "Michael Jordan", "Lebron James", "Stephen Curry", "Kevin Durant", "Magic Johnson", "Roger Federer", "Novak Djokovic", "Rafael Nadal", "Sachin Tendulkar"];

$(document).ready(function() {
    for (var i = 0; i < players.length; i++) {
        $("#players").append("<button type='button' onclick='searchGif(\"" + players[i] + "\")' class='btn btn-primary' value=' " + players[i] + "'> " + players[i] + " </button>");
    }
});

function click() {
    var userInput = $('#player-input').val();
    searchGif(userInput);
}

function submitButtonClicked() {
    var userInput = $('#player-input').val();

    
