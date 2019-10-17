const cool = require('cool-ascii-faces')
const express = require('express');
const app = express();


app.get('/transitu', function (request, response) {
    response.send(cool())
});

app.listen(3000, function() {
    console.log('listening at http://localhost:3000');
});



