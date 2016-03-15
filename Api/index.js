var express = require('express');

var usersRepository = require('./repositories/users.repository');

var app = express();

app.get('/users', function (req, res) {
    usersRepository.getUsers()
        .then(function (resultRows) {
            console.log('result:', resultRows);
            resultRows.forEach(function (row) {
                console.log('row:', row);
            });

            res.send(resultRows);
        }, function (err) {
            throw err;
        });
});

app.get('/hello', function (req, res) {
    res.send('Hello World!');
});

app.use(express.static('../Landingpage'));

app.listen(3000, function () {
    console.log('Server listening on port 3000!');
});
