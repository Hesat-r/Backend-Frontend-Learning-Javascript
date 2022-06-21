const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongo = require('./Database/MongoCon.js');
const SplitOddAndEvenRoute = require('./routes/SplitOddAndEvenRoute.js');
const CharCounterRoute = require('./routes/CharCounterRoute.js');
const api = require('./api/api.js');
const ExclamationRemoverRoute = require('./routes/ExclamationRemoverRoute.js');
const PointCalc = require('./routes/PointCalcRoute.js');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser());
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

app.use('/PointCalculator',PointCalc);
app.use('/SplitOddAndEven', SplitOddAndEvenRoute)
app.use('/charcounter', CharCounterRoute);
app.use('/api',api);
app.use('/ExclamationRemover', ExclamationRemoverRoute);
app.get('/', (req, res) => {
    res.render('./index.pug');
});



app.listen(5000);
console.log('Server is running on port 5000');

module.exports = app;