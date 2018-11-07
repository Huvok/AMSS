var mysql = require('mysql');
const express = require('express');
var morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Transpais'
});

mysqlConnection.connect(
    (err) => {
        if (!err)
            console.log('DB connection succeded.');
        else
            console.log('DB connection failed.\nError: ' + JSON.stringify(err, undefined, 2));
    }
);

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/clients', function (req, res) {
    mysqlConnection.query('SELECT * FROM Client', function(err, rows, fields) {
        if (!err)
            res.send(rows);
        else
            res.send(err);
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));