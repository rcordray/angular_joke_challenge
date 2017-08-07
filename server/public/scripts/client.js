console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  getJokes();
  $( '#addJokeButton' ).on( 'click', function(){
    console.log( 'addJokeButton on click');
  }); // end addJokeButton on click
}); // end doc ready

function getJokes() {
  $.ajax({
    method: 'GET',
    url: '/jokes',
    success: function(response) {
      console.log(response);
    }
  });
}
