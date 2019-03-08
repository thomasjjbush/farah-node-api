const jwt = require('jsonwebtoken');
const config = require('./../config');

module.exports =  function(req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'Error authenticating user.' });
  
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) return res.status(401).send({ auth: false, message: 'Error authenticating user.' });
        next();
    });
}