var express = require('express');
var app = express();

var readFolder = require('./readFolder');

app.get('/api/series', function(req, res) {
    const givenFolder = readFolder('/Downloads/Series');
    res.json(givenFolder);
})

app.listen(8080, function() {
    console.log('Example app listnening on port 8080!')
})