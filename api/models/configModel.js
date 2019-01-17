'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var configSchema = new Schema({
    category: {
        type: String,
        enum: ['hair', 'beauty', 'specialist'],
        required: true,
        unique: true
    },
    color: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Config', configSchema);