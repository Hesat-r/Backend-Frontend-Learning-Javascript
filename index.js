const express  = require('express');
const app = express();
const BodyParser = require('body-parser');
const cors = require('cors');
const mongo = require('./Database/MongoCon.js');
const SplitOddAndEvenRoute = require('./routes/SplitOddAndEvenRoute.js');





app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));
app.set('view engine', 'pug');


const connectToMongoDB = async() => {
    await mongo().then(async (mongoose) => {
        try{
        console.log('connected to mongodb!');
        
    }finally{
        mongoose.connection.clo

    }
  })
}
connectToMongoDB();

app.use('/SplitOddAndEven', SplitOddAndEvenRoute)

app.get('/', (req, res) => {
    res.render('./index.pug');
});



app.listen(5000);
console.log('Server is running on port 5000');

module.exports = app;