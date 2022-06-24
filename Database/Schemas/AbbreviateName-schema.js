const mongoose = require('mongoose');

const AbbreviateName = mongoose.Schema({
    blanktext: Array,
    result: String
    })
    module.exports = mongoose.model('AbbreviateName', AbbreviateName);