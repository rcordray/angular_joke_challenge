console.log('js');

var app = angular.module('JokeApp', []);

app.controller('JokeController', ['$http', function($http) {
    console.log('message controller has been loaded');
    var self = this;

    self.jokesArray = [];

    self.getJokes = function() {
        $http({
            method: 'GET',
            url: '/jokes'
        }).then(function(response) {
            console.log(response.data);
            self.jokesArray = response.data
        });
    };
    self.getJokes();

    self.postNewJoke = function() {
        console.log('post has been hit');
        $http({
            method: 'POST',
            url: '/jokes',
            data: self.newJoke
        }).then(function(response) {
            console.log(response.data);

            self.getJokes();
        });

    };

}]);



// $(document).ready(function () {
//   console.log('JQ');
//   $.ajax({
//     method: 'GET',
//     url: '/jokes',
//     success: function (response) {
//       console.log(response);
//       $('#outputDiv').empty();
//       for (var i = 0; i < response.length; i++) {
//         var joke = response[i];
//         $('#outputDiv').append('<div>' + joke.whoseJoke + ' : ' + joke.jokeQuestion + ' | ' + joke.punchLine + '</div>');
//       }
//     }
//   });
//   $('#addJokeButton').on('click', function () {
//     console.log('addJokeButton on click');
//     $.ajax({
//       method: 'POST',
//       url: '/jokes',
//       data: {
//         whoseJoke: $('#whoseJokeIn').val(),
//         jokeQuestion: $('#questionIn').val(),
//         punchLine: $('#punchlineIn').val()
//       },
//       success: function (response) {
//         console.log(response);
//         $.ajax({
//           method: 'GET',
//           url: '/jokes',
//           success: function (response) {
//             console.log(response);
//             $('#outputDiv').empty();
//             for (var i = 0; i < response.length; i++) {
//               var joke = response[i];
//               $('#outputDiv').append('<div>' + joke.whoseJoke + ' : ' + joke.jokeQuestion + ' | ' + joke.punchLine + '</div>');
//             }
//           }
//         });
//       }
//     });
//   }); // end addJokeButton on click
// }); // end doc ready