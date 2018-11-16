const express = require('express');
var morgan = require('morgan');
var db_layer = require('./db_layer.js');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

// HU1
app.put('/config', function (req, res) {
    var rate = req.body['rate'];
    res.send(JSON.stringify({"rate": db_layer.putConfig(rate)}));
});

app.listen(3000, () => console.log('Server running on port 3000'));