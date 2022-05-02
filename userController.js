const mysql = require('mysql');

// connection Pool
const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'mysql.metropolia.fi',
    user: 'andyl',
    password: 'salasana2022',
    database: 'andyl'
});


// View Users
exports.view = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; // not connected!
        console.log('Connected as ID ' + connection.threadId);

        // User the connection
        //connection.query('SELECT * FROM watchdb WHERE status = "active"', (err, rows) => {
        connection.query('SELECT * FROM watchdb', (err, rows) => {
            // When done with the connection, release it
            connection.release();
            if (!err) {
                let removedUser = req.query.removed;
                res.json({rows});

            } else {
                console.log(err);
            }
            console.log('The data from user table: \n', rows);

        });
    });
}

// Find User by Search
exports.find = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err; // not connected!
        console.log('Connected as ID ' + connection.threadId);

        let searchTerms = req.body.search;

        // User the connection
        connection.query('SELECT * FROM watchdb WHERE family LIKE ? OR name LIKE ?', ['%' + searchTerms + '%', '%' + searchTerms + '%'], (err, rows) => {
            // When done with the connection, release it
            connection.release();
            if (!err) {
                res.render('home', {rows});
            } else {
                console.log(err);
            }
            console.log('The data from user table: \n', rows);
        });
    });
}

exports.form = (req, res) => {
    res.render('add-user');
}

// Add new user
exports.create = (req, res) => {
    const {brand, family, name, reference, glass, dialcolor, diameter, lugwidth, material, wr, strap, back, type, year, msrp, functions} = req.body;

    pool.getConnection((err, connection) => {
        if (err) throw err; // not connected!
        console.log('Connected as ID ' + connection.threadId);
        let searchTerms = req.body.search;

        // User the connection
        connection.query('INSERT INTO watchdb SET brand = ?, family = ?, name = ?, reference = ?, glass = ?, dialcolor = ?, diameter = ?, lugwidth = ?, material = ?, wr = ?, strap = ?, back = ?, type = ?, year = ?, msrp = ?, functions = ?', [brand, family, name, reference, glass, dialcolor, diameter, lugwidth, material, wr, strap, back, type, year, msrp, functions], (err, rows) => {
            // When done with the connection, release it
            connection.release();
            if (!err) {
                res.render('add-user', {alert: 'User added successfully.'});
            } else {
                console.log(err);
            }
            console.log('The data from user table: \n', rows);
        });
    });
}

// Edit user
exports.edit = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; // not connected!
        console.log('Connected as ID ' + connection.threadId);

        // User the connection
        connection.query('SELECT * FROM watchdb WHERE id = ?', [req.params.id], (err, rows) => {
            // When done with the connection, release it
            connection.release();
            if (!err) {
                res.render('edit-user', {rows});
            } else {
                console.log(err);
            }
            console.log('The data from user table: \n', rows);
        });
    });
}

// Update user
exports.update = (req, res) => {
    const {brand, family, name, reference, glass, dialcolor, diameter, lugwidth, material, wr, strap, back, type, year, msrp, functions} = req.body;


    pool.getConnection((err, connection) => {
        if (err) throw err; // not connected!
        console.log('Connected as ID ' + connection.threadId);
        // User the connection
        connection.query('UPDATE watchdb SET brand = ?, family = ?, name = ?, reference = ?, glass = ?, dialcolor = ?, diameter = ?, lugwidth = ?, material = ?, wr = ?, strap = ?, back = ?, type = ?, year = ?, msrp = ?, functions = ? WHERE id = ?', [brand, family, name, reference, glass, dialcolor, diameter, lugwidth, material, wr, strap, back, type, year, msrp, functions, req.params.id], (err, rows) => {
            // When done with the connection, release it
            connection.release();
            if (!err) {

                pool.getConnection((err, connection) => {
                    if (err) throw err; // not connected!
                    console.log('Connected as ID ' + connection.threadId);
                    // User the connection
                    connection.query('SELECT * FROM watchdb WHERE id = ?', [req.params.id], (err, rows) => {
                        // When done with the connection, release it
                        connection.release();
                        if (!err) {
                            res.render('edit-user', {rows, alert: `${brand} has been updated.`});
                        } else {
                            console.log(err);
                        }
                        console.log('The data from user table: \n', rows);
                    });
                });
            } else {
                console.log(err);
            }
            console.log('The data from user table: \n', rows);
        });
    });
}

// Delete user
exports.delete = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; // not connected!
        console.log('Connected as ID ' + connection.threadId);

        // User the connection
        connection.query('DELETE FROM watchdb WHERE id = ?', [req.params.id], (err, rows) => {
            // When done with the connection, release it
            connection.release();
            if (!err) {
                res.redirect('/');
            } else {
                console.log(err);
            }
            console.log('The data from user table: \n', rows);
        });
    });

    // pool.getConnection((err, connection) => {
    //     if (err) throw err;
    //     connection.query('UPDATE watchdb SET status = ? WHERE id = ?', ['removed', req.params.id], (err, rows) => {
    //         connection.release(); // return the connection to pool
    //         if (!err) {
    //             let removedUser = encodeURIComponent('User successfully removed.');
    //             res.redirect('/?removed=' + removedUser);
    //         } else {
    //             console.log(err);
    //         }
    //         console.log('The data from beer table are: \n', rows);
    //     });
    // });
}

// View Users
exports.viewall = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; // not connected!
        console.log('Connected as ID ' + connection.threadId);
        // User the connection
        connection.query('SELECT * FROM watchdb WHERE id = ?', [req.params.id], (err, rows) => {
            // When done with the connection, release it
            connection.release();
            if (!err) {
                res.render('view-user', {rows});
            } else {
                console.log(err);
            }
            console.log('The data from user table: \n', rows);
        });
    });
}