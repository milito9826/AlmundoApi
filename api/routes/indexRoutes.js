const express = require('express');
var app       = express();

app.use('/api', require('./hotelRoutes'));

module.exports = app;