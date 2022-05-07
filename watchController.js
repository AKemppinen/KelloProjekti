const mysql = require('mysql');

// connection Pool
const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'mysql.metropolia.fi',
    user: 'andyl',
    password: 'salasana2022',
    database: 'andyl'
});



// View Watches
exports.view = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; // not connected!
        console.log('Connected as ID ' + connection.threadId);

        // Watch the connection
        //connection.query('SELECT * FROM watchdb WHERE status = "active"', (err, rows) => {
        // Select all watches from the watchdb database
        connection.query('SELECT * FROM watchdb', (err, rows) => {
            // When done with the connection, release it
            connection.release();
            if (!err) {

                // Get data from database in a json format
                res.json({rows});

            } else {
                console.log(err);
            }
            console.log('The data from watch table: \n', rows);

        });
    });
}

exports.form = (req, res) => {
    res.render('admin');
}

// Add new watch by admin
exports.create = (req, res) => {
    // setting variables for the different values
    const {brand, family, name, reference, glass, dialcolor, diameter, lugwidth, material, wr, strap, back, type, year, msrp, movement, functions} = req.body;

    pool.getConnection((err, connection) => {
        if (err) throw err; // not connected!
        console.log('Connected as ID ' + connection.threadId);
        //let searchTerms = req.body.search;

        // Watch the connection
        // Insert given values to the sql INSERT from the variables
        connection.query('INSERT INTO watchdb SET brand = ?, family = ?, name = ?, reference = ?, glass = ?, dialcolor = ?, diameter = ?, lugwidth = ?, material = ?, wr = ?, strap = ?, back = ?, type = ?, year = ?, msrp = ?, movement = ?, functions = ?', [brand, family, name, reference, glass, dialcolor, diameter, lugwidth, material, wr, strap, back, type, year, msrp, movement, functions], (err, rows) => {
            // When done with the connection, release it
            connection.release();
            if (!err) {
                res.render('admin', {alert: 'Watch added successfully.'});
            } else {
                console.log(err);
            }
            console.log('The data from watch table: \n', rows);
        });
    });
}
