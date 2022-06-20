const mongoose = require('mongoose');

const CountSchema = mongoose.Schema({
    chars: Array,
    count: Array,
    result: String
    })
    module.exports = mongoose.model('chars', CountSchema);