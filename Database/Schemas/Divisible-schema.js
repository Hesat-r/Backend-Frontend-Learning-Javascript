const mongoose = require('mongoose');

const Divisible = mongoose.Schema({
    addedNumbers: Array,
    Divided: Number,
    result: Array,
    })
    module.exports = mongoose.model('Divisible', Divisible);