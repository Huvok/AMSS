var mysql = require('mysql');

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

module.exports = {
    putConfig: function(rate) {
        return rate;
    }
};