const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes/routes'); 
const cors = require('cors');
const cookieParser = require('cookie-parser');

var mongoose = require('mongoose');
var Service = require('./api/models/serviceModel');
var Config = require('./api/models/configModel');
var User = require('./api/models/userModel');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/serviceDb');

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

routes(app); 

var port = process.env.PORT || 3000;
app.listen(port);