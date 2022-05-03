const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require('express-handlebars');
const cors = require("cors");
const app = express();
const userController = require('./userController');

let corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
// Static Files
//app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get('/', userController.view);
// set port, listen for requests
app.post('/adduser', userController.create);


const routes = require('./server/routes/user');
app.use('/', routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// Templating Engine
app.engine('hbs', exphbs.engine( {extname: '.hbs' }));
app.set('view engine', 'hbs');