const mongoose = require('mongoose');
const url = 'mongodb+srv://test:test@cluster0.wbkro.mongodb.net/?retryWrites=true&w=majority';

module.exports = async() => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return mongoose
}