const express = require('express');
const router = express.Router();
const NumberSchema = require('/Users/hesatredzepi/Desktop/SplittOddAndEven/Database/Schemas/Number-schema.js');
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

const number = {
    numbers: Numbers,
    oddNumbers: OddNumbers,
    evenNumbers: EvenNumbers
    
}

router.get('/', (req, res,next) => {
    res.render('./SplitOddAndEven.pug');
    next();
});

router.post('/addnumber',(req,res,next) => {
    res.render('./SplitOddAndEven.pug');
    if(req.body.number < 0){
        return 'Sie müssen eine positive Zahl eingeben';
    }
    if(/^[0-9]+$/.test(req.body.number)){
        Numbers.push(' '+req.body.number + ' ');
    }
    
    console.log(Numbers);
    next();
});

router.post('/submit', async(req,res,next) => {
    res.render('./SplitOddAndEven.pug',{Numbers: Numbers, OddNumbers: OddNumbers, EvenNumbers: EvenNumbers});
    console.log(SplitOddAndEven(Numbers));
    await  new NumberSchema(number).save();
    next();
});

router.get('/api',(req,res,next) => {
    res.json({"Numbers":Numbers ,"OddNumbers":OddNumbers, "EvenNumbers":EvenNumbers});
   next();
});

router.post('/delete',(req,res) => {
    res.render('./SplitOddAndEven.pug');
    Numbers.length = 0;
    OddNumbers.length = 0;
    EvenNumbers.length = 0;
    console.log(Numbers);
    });
    module.exports = router, Numbers,OddNumbers,EvenNumbers;