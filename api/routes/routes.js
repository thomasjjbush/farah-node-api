module.exports = function (app) {

    const config = require('../controllers/configController');
    const service = require('../controllers/servicesController');
    const email = require('../controllers/emailController');
    const user = require('./../controllers/userController');
    const auth = require('./../controllers/authenticate');

    app.route('/config')
        .get(config.all);

    app.route('/config/:category')
        .get(config.category)
        .put(auth, config.update);

    app.route('/services')
        .post(auth, service.create);

    app.route('/services/:id')
        .put(auth, service.update)
        .delete(auth, service.delete);

    app.route('/services/:category')
        .get(service.category);

    app.route('/email')
        .post(auth, email.send);

    app.route('/register')
        .post(user.register)

    app.route('/login')
        .post(user.login)
        .get(user.verify)
};