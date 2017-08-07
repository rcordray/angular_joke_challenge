console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  getJokes();
  $( '#addJokeButton' ).on( 'click', function(){
    console.log( 'addJokeButton on click');
    $.ajax({
      method: 'POST',
      url: '/jokes',
      data: {
        whoseJoke: $('#whoseJokeIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#punchlineIn').val()
      },
      success: function(response) {
        console.log(response);
        getJokes();
      }
    });
  }); // end addJokeButton on click
}); // end doc ready

function getJokes() {
  $.ajax({
    method: 'GET',
    url: '/jokes',
    success: function(response) {
      console.log(response);
      displayJokesOnDOM(response);
    }
  });
}

function displayJokesOnDOM(jokesArray) {
  $('#outputDiv').empty();
  for (var i = 0; i < jokesArray.length; i++) {
    var joke = jokesArray[i];
    $('#outputDiv').append('<div>' + joke.whoseJoke + ' : ' + joke.jokeQuestion + ' | ' + joke.punchLine + '</div>');
  }
}
