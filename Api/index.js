var express = require('express');
var app = express();

app.get('/hello', function (req, res) {
    res.send('Hello World!');
});

app.use(express.static('../Landingpage'));

app.listen(3000, function () {
    console.log('Server listening on port 3000!');
});