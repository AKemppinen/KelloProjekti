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
                let removedWatch = req.query.removed;
                // Get data from database in a json format
                res.json({rows});

            } else {
                console.log(err);
            }
            console.log('The data from watch table: \n', rows);

        });
    });
}

// Find Watch by Search
exports.find = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err; // not connected!
        console.log('Connected as ID ' + connection.threadId);

        let searchTerms = req.body.search;

        // Watch the connection
        connection.query('SELECT * FROM watchdb WHERE family LIKE ? OR name LIKE ?', ['%' + searchTerms + '%', '%' + searchTerms + '%'], (err, rows) => {
            // When done with the connection, release it
            connection.release();
            if (!err) {
                res.render('home', {rows});
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

// Add new watch
exports.create = (req, res) => {
    // setting variables for the different values
    const {brand, family, name, reference, glass, dialcolor, diameter, lugwidth, material, wr, strap, back, type, year, msrp, movement, functions} = req.body;

    pool.getConnection((err, connection) => {
        if (err) throw err; // not connected!
        console.log('Connected as ID ' + connection.threadId);
        let searchTerms = req.body.search;

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


// Edit Watch
exports.edit = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; // not connected!
        console.log('Connected as ID ' + connection.threadId);

        // Watch the connection
        // Select all watches based on id
        connection.query('SELECT * FROM watchdb WHERE id = ?', [req.params.id], (err, rows) => {
            // When done with the connection, release it
            connection.release();
            if (!err) {
                res.render('edit-watch', {rows});
            } else {
                console.log(err);
            }
            console.log('The data from watch table: \n', rows);
        });
    });
}

// Update watch
exports.update = (req, res) => {
    // setting variables for the different values
    const {brand, family, name, reference, glass, dialcolor, diameter, lugwidth, material, wr, strap, back, type, year, msrp, functions} = req.body;


    pool.getConnection((err, connection) => {
        if (err) throw err; // not connected!
        console.log('Connected as ID ' + connection.threadId);
        // Watch the connection
        // Insert given values to the sql UPDATE from the variables
        connection.query('UPDATE watchdb SET brand = ?, family = ?, name = ?, reference = ?, glass = ?, dialcolor = ?, diameter = ?, lugwidth = ?, material = ?, wr = ?, strap = ?, back = ?, type = ?, year = ?, msrp = ?, functions = ? WHERE id = ?', [brand, family, name, reference, glass, dialcolor, diameter, lugwidth, material, wr, strap, back, type, year, msrp, functions, req.params.id], (err, rows) => {
            // When done with the connection, release it
            connection.release();
            if (!err) {

                pool.getConnection((err, connection) => {
                    if (err) throw err; // not connected!
                    console.log('Connected as ID ' + connection.threadId);
                    // Watch the connection
                    // Select all watches based on id
                    connection.query('SELECT * FROM watchdb WHERE id = ?', [req.params.id], (err, rows) => {
                        // When done with the connection, release it
                        connection.release();
                        if (!err) {
                            res.render('edit-watch', {rows, alert: `${brand} has been updated.`});
                        } else {
                            console.log(err);
                        }
                        console.log('The data from watch table: \n', rows);
                    });
                });
            } else {
                console.log(err);
            }
            console.log('The data from watch table: \n', rows);
        });
    });
}

// Delete watch
exports.delete = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; // not connected!
        console.log('Connected as ID ' + connection.threadId);

        // Watch the connection
        // Delete a watch based on id
        connection.query('DELETE FROM watchdb WHERE id = ?', [req.params.id], (err, rows) => {
            // When done with the connection, release it
            connection.release();
            if (!err) {
                res.redirect('/');
            } else {
                console.log(err);
            }
            console.log('The data from watch table: \n', rows);
        });
    });

    // pool.getConnection((err, connection) => {
    //     if (err) throw err;
    //     connection.query('UPDATE watchdb SET status = ? WHERE id = ?', ['removed', req.params.id], (err, rows) => {
    //         connection.release(); // return the connection to pool
    //         if (!err) {
    //             let removedWatch = encodeURIComponent('Watch successfully removed.');
    //             res.redirect('/?removed=' + removedWatch);
    //         } else {
    //             console.log(err);
    //         }
    //         console.log('The data from beer table are: \n', rows);
    //     });
    // });
}

// View Watches
exports.viewall = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; // not connected!
        console.log('Connected as ID ' + connection.threadId);
        // Watch the connection
        // Select all watches based on id
        connection.query('SELECT * FROM watchdb WHERE id = ?', [req.params.id], (err, rows) => {
            // When done with the connection, release it
            connection.release();
            if (!err) {
                res.render('view-watch', {rows});
            } else {
                console.log(err);
            }
            console.log('The data from watch table: \n', rows);
        });
    });
}