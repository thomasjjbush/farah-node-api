'use strict';

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'thomasjjbush@gmail.com',
        pass: 'Architech1'
    }
});

exports.send = function (req, res, next) {

    if ( req.body.name.length === 0 || req.body.email.length === 0 || req.body.message.length === 0 ) return next(new Error);

    const mailOptions = {
        from: 'thomasjjbush@gmail.com', 
        to: 'thomasjjbush@gmail.com', 
        subject: 'Message recieved from ' + req.body.email, 
        html: '<p>' + req.body.message + ' sent from ' + req.body.name + '</p>'
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) res.send(err);
        res.json({ status: 200 });
    });
};