const mongoose = require('mongoose');

const SheepCounterSchema = mongoose.Schema({
    amount: Number,
    result: String
    })
    module.exports = mongoose.model('SheepCounter', SheepCounterSchema);