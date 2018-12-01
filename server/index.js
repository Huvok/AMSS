const express = require('express');
var morgan = require('morgan');
var db_layer = require('./db_layer.js');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/fareService', function(req, res) {
    var distance = Math.random() * 29 + 1.0;
    var baseQuota = Math.random() * 45 + 25.0;
    var fareRate = Math.random() * 8 + 2.0;
    var price = baseQuota + distance * fareRate;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify({
        'distance': distance,
        'baseQuota': baseQuota,
        'fareRate': fareRate,
        'price': price,
    }));
});

app.get('/client', function(req, res) {
    var clientID = req.query['clientID'];
    db_layer.getClientInfo(clientID, function(status, rows) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(JSON.stringify({'status': status, 'rows': rows}));
    });
});

app.get('/taxi', function(req, res) {
    var clientID = req.query['taxiID'];
    db_layer.getTaxiInfo(taxiID, function(status, rows) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(JSON.stringify({'status': status, 'rows': rows}));
    });
});

// HU1
app.put('/config', function (req, res) {
    var rate = req.body['rate'];
    res.send(JSON.stringify({"rate": db_layer.putConfig(rate)}));
});

// CU5

app.post('/ride', function(req, res) {
    var source = req.body['source'];
    var destination = req.body['destination'];
    var clientID = req.body['clientID'];
    var taxiID = req.body['taxiID'];
    var baseQuota = req.body['baseQuota'];
    var fareRate = req.body['fareRate'];
    var distKm = req.body['distance'];
    db_layer.postRide(source, destination, clientID, taxiID, baseQuota, fareRate, distKm, function(status) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'content-type');
        res.send(JSON.stringify({'status': status}));
    });
});
    

app.options('/ride', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.send();
});

// CU6.1
app.get('/rideByClient', function(req, res) {
    var clientID = req.query['clientID'];
    db_layer.getRideByClient(clientID, function(status, rows) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(JSON.stringify({'status': status, 'rows': rows}));
    });
});

// CU6.2
app.get('/rideByTaxi', function(req, res) {
    var taxiID = req.query['taxiID'];
    db_layer.getRideByTaxi(taxiID, function(status, rows) {
        res.send(JSON.stringify({'status': status, 'rows': rows}));
    });
});

// CU7
app.post('/client', function(req, res) {
    var email = req.body['email'];
    var passwd = req.body['passwd'];
    var fName = req.body['fName'];
    var lName = req.body['lName'];
    db_layer.postClient(email, passwd, fName, lName, function(status) {
        res.send(JSON.stringify({'status': status}));
    });
});

// CU8 (Admin)
app.post('/loginAdmin', function(req, res) {
    var email = req.body['email'];
    var passwd = req.body['passwd'];
    db_layer.postLoginAdmin(email, passwd, function(status) {
        res.send(JSON.stringify({'status': status}));
    });
});

// CU8 (Client)
app.post('/loginClient', function(req, res) {
    var email = req.body['email'];
    var passwd = req.body['passwd'];
    db_layer.postLoginClient(email, passwd, function(status, clientID) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(JSON.stringify({'status': status, 'clientID': clientID}));
    });
});

app.options('/loginClient', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.send();
    db_layer.postLoginClient(email, passwd, function(status) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'content-type');
        res.send(JSON.stringify({'status': status}));
    });
});

// CU10
app.put('/client', function(req, res) {
    var clientID = req.body['clientID'];
    var email = req.body['email'];
    var passwd = req.body['passwd'];
    var fName = req.body['fName'];
    var lName = req.body['lName'];
    db_layer.putClient(clientID, email, passwd, fName, lName, function(status) {
        res.send(JSON.stringify({'status': status}));
    });
});

// CU11
app.put('/payment', function(req, res) {
    var cardID = req.body['cardID'];
    var cardNo = req.body['cardNo'];
    var ccv = req.body['ccv'];
    var expDate = req.body['expDate'];
    db_layer.putPayment(cardID, cardNo, ccv, expDate, function(status) {
        res.send(JSON.stringify({'status': status}));
    });
});

// CU14
app.post('/ridePending', function(req, res) {
    var source = req.body['source'];
    var destination = req.body['destination'];
    var clientID = req.body['clientID'];
    var baseQuota = req.body['baseQuota'];
    var fareRate = req.body['fareRate'];
    var taxiID = req.body['taxiID'];
    db_layer.postRidePending(source, destination, clientID, baseQuota, fareRate, taxiID, function(status) {
        res.send(JSON.stringify({'status': status}));
    });
});

app.options('/ridePending', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.send();
});

app.put('/ridePending', function(req, res) {
    var rideID = req.body['rideID'];
    var taxiID = req.body['taxiID'];
    db_layer.putRidePending(rideID, taxiID, function(status) {
        res.send(JSON.stringify({'status': status}));
    });
});

// CU15
app.get('/ride', function(req, res) {
    var rideID = req.query['rideID'];
    db_layer.getRide(rideID, function(status, row) {
        res.send(JSON.stringify({'status': status, 'row': row}));
    });
});

app.listen(60123, () => console.log('Server running on port 60123'));