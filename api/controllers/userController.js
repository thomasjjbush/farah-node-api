const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const model = mongoose.model('User');
const config = require('./../config');

exports.login = function (req, res) {
    model.findOne({ email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');

        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false });

        const token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 3600 });
        res.status(200).send({ 
            username: user.username, 
            token: token,
            auth: true
        });
    });
}

exports.register = function (req, res) {
    const passowrd = bcrypt.hashSync(req.body.password, 8);
    const new_user = new model({
        username: req.body.username,
        password: passowrd
    })
    new_user.save(function (err, user) {
        if (err) res.send(err);

        const token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 3600 });
        res.status(200).send({ 
            username: user.username, 
            token: token,
            auth: true
        });
    });
};

exports.verify = function (req, res) {
    const token = req.headers['x-access-token'];
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) return res.status(401).send(false);
        res.status(200).send(true)
    });
}
