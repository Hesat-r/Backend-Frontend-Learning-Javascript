const mongoose = require('mongoose');

const AbbreviateName = mongoose.Schema({
    blanktext: String,
    result: String
    })
    module.exports = mongoose.model('AbbreviateName', AbbreviateName);