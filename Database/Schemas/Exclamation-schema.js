const { string } = require('i/lib/util');
const mongoose = require('mongoose');

const ExclamationSchema = mongoose.Schema({
    blanktext: String,
    result: String
    })
    module.exports = mongoose.model('exclamation', ExclamationSchema);