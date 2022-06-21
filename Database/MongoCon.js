const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017';

module.exports = async() => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return mongoose
}