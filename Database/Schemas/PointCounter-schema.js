const mongoose = require('mongoose');

const PointCountSchema = mongoose.Schema({
    values: Array,
    result: Array
    })
    module.exports = mongoose.model('pointcount', PointCountSchema);