const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes/routes'); 
var cors = require('cors')

app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Service = require('./api/models/serviceModel');
Config = require('./api/models/configModel');
Booking = require('./api/models/bookingModel');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/serviceDb');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); 

app.listen(port);

