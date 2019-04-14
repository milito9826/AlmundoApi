require('./config/config')

const express    = require('express');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
var cors         = require('cors');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE,');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
    res.send('Almundo Rest');
});

app.use(require("./routes/indexRoutes"));

app.listen(process.env.PORT, function() {
    console.log('Puerto Activo. ');
});