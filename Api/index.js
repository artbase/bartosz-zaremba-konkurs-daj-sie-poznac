var express = require('express');
var mysql = require('mysql');

var app = express();

var mysqlConfig = require('./config/mysql-config');
var connection = mysql.createConnection(mysqlConfig);
connection.connect();

app.get('/users', function (req, res) {
    connection.query('SELECT * FROM Users', function(err, rows, fields) {
        if (err) throw err;

        rows.forEach(function (row) {
            console.log('row:', row);
        });

        res.send(rows);
    });
});

app.get('/hello', function (req, res) {
    res.send('Hello World!');
});

app.use(express.static('../Landingpage'));

app.listen(3000, function () {
    console.log('Server listening on port 3000!');
});