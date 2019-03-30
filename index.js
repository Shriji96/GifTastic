$(document).ready(function() {
    
    var athletes = ["Kobe Bryant", "Michael Jordan", "Lebron James", "Stephen Curry", "Kevin Durant", "Magic Johnson", "Roger Federer", "Novak Djokovic", "Rafael Nadal", "Sachin Tendulkar"];


    function renderButtons() {
        $('#buttons-view').empty();
        
        for(var i = 0; i < athletes.length; i++) {
        var button = $('<button>');
            button.addClass('athlete');
            button.attr('data-name', athletes[i]);
            button.text(athletes[i]);
            $('#athletes-buttons').append(button);
        }
       }

        $(document).on('click', '.athletes-button', function() {
       

    var athlete = $(this).attr('data-name');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + athlete + "&api_key=GphJwpkIXq4l6EGqvH1Tg4nztLgjIM5E&q=&limit=10&offset=0&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (athleteData) {
      var results = athleteData.data;
      console.log(results)

      for (var i = 0; i < results.length; i++) {
        var athleteDiv = $('<div>').addClass(athlete-gifs);
        var rating = results[i].rating;
        var p = $('<p>').text('Rating: ' + rating);
        
      }

    });
 });
$('#add-athlete').on('click', function(event) {
 event.preventDefault();
var athleteInput = $('athlete-input').val().trim();
button.push(athlete);

renderButtons();
}); 
renderButtons();

});
   
