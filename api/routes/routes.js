'use strict';

module.exports = function (app) {

    const config = require('../controllers/configController');
    const service = require('../controllers/servicesController');
    const booking = require('../controllers/bookingController');

    app.route('/config')
        .get(config.all);

    app.route('/config/:category')
        .get(config.category)
        .put(config.update);

    app.route('/services')
        .post(service.create);

    app.route('/services/:id')
        .put(service.update)
        .delete(service.delete);

    app.route('/services/:category')
        .get(service.category);

    app.route('/booking')
        .post(booking.create);

    app.route('/booking/:week')
        .get(booking.bookings);

    app.route('/booking/:week/:id')
        .put(booking.update)
        .delete(booking.delete);

};