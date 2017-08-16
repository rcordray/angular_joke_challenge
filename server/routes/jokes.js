var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js')


router.get('/', function(req, res) {
    // add select query
    console.log('message get was hit');

    pool.connect(function(errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('Error connecting to DataBase', errorConnectingToDatabase);
            res.sendStatus(500)
        } else {
            client.query('SELECT * FROM jokes;', function(errorMakingQuery, result) {
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            });

        }
    });
});


router.post('/', function(req, res) {
    console.log('message post was hit!');
    // add insert query
    pool.connect(function(errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('Error connecting to DataBase', errorConnectingToDatabase);
            res.sendStatus(500)
        } else {
            client.query('INSERT INTO jokes (author, joke, punchline) VALUES ($1, $2, $3);', [req.body.author, req.body.joke, req.body.punchline], function(errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            });

        }
    });
    // pool.query()

});



module.exports = router;