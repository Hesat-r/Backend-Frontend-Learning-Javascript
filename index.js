const express  = require('express');
const app = express();
const BodyParser = require('body-parser');
const cors = require('cors');
const mongo = require('./js/MongoCon.js');
const NumberSchema = require('./Schemas/Number-schema.js');
let Numbers=[];
let OddNumbers=[];
let EvenNumbers=[];



function SplitOddAndEven(Numbers) {
    for (let i = 0; i < Numbers.length; i++) {
        if (Numbers[i] % 2 == 0) {
            EvenNumbers.push(' '+ Numbers[i] + ' ');
        } else {
            OddNumbers.push(' '+ Numbers[i] + ' ');
        }
    }
    return ['Ungerade Zahlen',OddNumbers,'Gerade Zahlen', EvenNumbers];
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('public'));
app.set('view engine', 'pug');

const number = {
    numbers: Numbers,
    oddNumbers: OddNumbers,
    evenNumbers: EvenNumbers
    
}
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
app.get('/SplitOddAndEven', (req, res) => {
    res.render('./SplitOddAndEven.pug');
});
app.get('/', (req, res) => {
    res.render('./index.pug');
});
app.post('/SplitOddAndEven',(req,res) => {
    res.render('./SplitOddAndEven.pug');
    if(req.body.number < 0){
        return 'Sie müssen eine positive Zahl eingeben';
    }
    if(/^[0-9]+$/.test(req.body.number)){
        Numbers.push(' '+req.body.number + ' ');
    }
    
    console.log(Numbers);
});

app.post('/SplitOddAndEven/submit', async(req,res) => {
    res.render('./SplitOddAndEven.pug');
    console.log(SplitOddAndEven(Numbers));
    await  new NumberSchema(number).save();
});
app.get('/SplitOddAndEven/api',(req,res) => {
    res.json({"Numbers":Numbers ,"OddNumbers":OddNumbers, "EvenNumbers":EvenNumbers});
    
});

app.get('/SplitOddAndEven/api/:id',(req,res) =>{
    fetchid = req.params.id;
    NumberSchema.findById(fetchid).then((result) => {
        res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
    
});
app.post('/SplitOddAndEven/delete',(req,res) => {
    res.render('./SplitOddAndEven.pug');
    Numbers.length = 0;
    OddNumbers.length = 0;
    EvenNumbers.length = 0;
    console.log(Numbers);
    });

app.listen(5000);
console.log('Server is running on port 5000');