const express  = require('express');
const app = express();
const BodyParser = require('body-parser');
const cors = require('cors');
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

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('./index.pug');
});

app.post('/',(req,res) => {
    res.render('./index.pug');
    if(req.body.number < 0){
        return 'Sie müssen eine positive Zahl eingeben';
    }
    if(/^[0-9]+$/.test(req.body.number)){
        Numbers.push(' '+req.body.number + ' ');
    }
    
    console.log(Numbers);
});

app.post('/submit',(req,res) => {
    res.render('./index.pug');
    console.log(SplitOddAndEven(Numbers));
});
app.get('/api',(req,res) => {
    res.json({"Numbers":Numbers ,"OddNumbers":OddNumbers, "EvenNumbers":EvenNumbers});
});

app.post('/delete',(req,res) => {
    res.render('./index.pug');
    Numbers.length = 0;
    OddNumbers.length = 0;
    EvenNumbers.length = 0;
    console.log(Numbers);
    });

app.listen(5000);
console.log('Server is running on port 5000');