'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    category: {
        type: String,
        enum: ['hair', 'beauty', 'specialist'],
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true,
    },
    promotion: {
        type: Number,
        required: false,
        default: 0
    },
    duration: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Services', serviceSchema);