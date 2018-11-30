var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'TaxiSeguroDB'
});

mysqlConnection.connect(
    (err) => {
        if (!err)
            console.log('DB connection succeded.');
        else
            console.log('DB connection failed.\nError: ' + JSON.stringify(err, undefined, 2));
    }
);

module.exports = {
    getClientInfo: function(clientID, callback) {
        var sql = 'SELECT * FROM Client c INNER JOIN Payment p WHERE c.clientID = ? AND c.clientID = p.clientID';
        mysqlConnection.query(sql, [clientID], function(err, rows, fields) {
            if(!err)
                callback('OK', rows);
            else
                callback(err);
        });
    },

    postRide: function(source, destination, clientID, taxiID, baseQuota, fareRate, callback) {
        var sql = 'INSERT INTO Ride(source, destination, clientID, taxiID, ' +
            'baseQuota, distKm, fareRate, rideDate) VALUES (?, ?, ?, ?, ?, 5.00, ?, CURDATE())';
        mysqlConnection.query(sql, [source, destination, clientID, taxiID, baseQuota, fareRate], function(err, rows, fields) {
            if (!err)
                callback('OK');
            else
                callback(err);
        });
    },

    getRideByClient: function(clientID, callback) {
        var sql = 'SELECT * FROM Ride WHERE clientID = ?';
        mysqlConnection.query(sql, [clientID], function(err, rows, fields) {
            if (!err)
                callback('OK', rows);
            else
                callback(err);
        });
    },

    getRideByTaxi: function(taxiID, callback) {
        var sql = 'SELECT * FROM Ride WHERE taxiID = ?';
        mysqlConnection.query(sql, [taxiID], function(err, rows, fields) {
            if (!err)
                callback('OK', rows);
            else
                callback(err);
        });
    },

    postClient: function(email, passwd, fName, lName, callback) {
        var sql = 'INSERT INTO Client(email, passwd, fName, lName, active) ' +
            'VALUES(?, ?, ?, ?, 1)';
        mysqlConnection.query(sql, [email, passwd, fName, lName], function(err, rows, fields) {
            if (!err)
                callback('OK');
            else
                callback(err);
        });
    },

    postLoginAdmin: function(email, passwd, callback) {
        var sql = 'SELECT * FROM Admin WHERE email = ? AND passwd = ?';
        mysqlConnection.query(sql, [email, passwd], function(err, rows, fields) {
            if (!err) {
                if (rows.length > 0)
                    callback('OK', rows[0].clientID);
                else
                    callback('INCORRECT LOGIN', -1);
            }
            else
                callback(err);
        });
    },

    postLoginClient: function(email, passwd, callback) {
        var sql = 'SELECT * FROM Client WHERE email = ? AND passwd = ?';
        mysqlConnection.query(sql, [email, passwd], function(err, rows, fields) {
            if (!err) {
                if (rows.length > 0)
                    callback('OK', rows[0].clientID);
                else
                    callback('INCORRECT LOGIN', -1);
            }
            else
                callback(err);
        });
    },

    putClient: function(clientID, email, passwd, fName, lName, callback) {
        var sql = 'UPDATE Client SET email = ?, passwd = ?, fName = ?, lName = ? WHERE clientID = ?';
        mysqlConnection.query(sql, [email, passwd, fName, lName, clientID], function(err, rows, fields) {
            if (!err)
                callback('OK');
            else
                callback(err);
        });
    },

    putPayment: function(cardID, cardNo, ccv, expDate, callback) {
        var sql = 'UPDATE Payment SET cardNo = ?, ccv = ?, expDate = ? WHERE cardID = ?';
        mysqlConnection.query(sql, [cardNo, ccv, expDate, cardID], function(err, rows, fields) {
            if (!err)
                callback('OK');
            else
                callback(err);
        });
    },

    postRidePending: function(source, destination, clientID, baseQuota, fareRate, callback) {
        var sql = 'INSERT INTO Ride(source, destination, clientID, taxiID, ' +
            'baseQuota, distKm, fareRate, rideDate) VALUES (?, ?, ?, NULL, ?, 5.00, ?, CURDATE())';
        mysqlConnection.query(sql, [source, destination, clientID, baseQuota, fareRate], function(err, rows, fields) {
            if (!err)
                callback('OK');
            else
                callback(err);
        });
    },

    putRidePending: function(rideID, taxiID, callback) {
        var sql = 'UPDATE Ride SET taxiID = ? WHERE rideID = ?';
        mysqlConnection.query(sql, [taxiID, rideID], function(err, rows, fields) {
            if (!err)
                callback('OK');
            else
                callback(err);
        });
    },

    getRide: function(rideID, callback) {
        console.log(rideID);
        var sql = 'SELECT * FROM Ride WHERE rideID = ?';
        mysqlConnection.query(sql, [rideID], function(err, rows, fields) {
            if (!err)
                callback('OK', rows);
            else
                callback(err, null);
        });
    }
};