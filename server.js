const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors')

require('dotenv').config()
require('./server/db/mongoose');

const app = express();
const port = process.env.PORT || 5000

//add cors
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

//parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Angular dist output folder
app.use('/', express.static(path.join(__dirname, '/dist')));

//routes
app.use(require('./server/routes'));

app.listen(port, () => {
    console.log('investorscout app listening on port ' + port);
})

