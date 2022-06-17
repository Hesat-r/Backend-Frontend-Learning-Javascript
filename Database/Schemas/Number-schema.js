const mongoose = require('mongoose');

const NumberSchema = mongoose.Schema({
    numbers: Array,
    oddNumbers: Array,
    evenNumbers: Array
    })
    module.exports = mongoose.model('Number', NumberSchema);