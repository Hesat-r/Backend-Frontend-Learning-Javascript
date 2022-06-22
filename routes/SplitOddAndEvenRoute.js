const express = require('express');
const router = express.Router();
const NumberSchema = require('/Users/hesatredzepi/Desktop/SplittOddAndEven/Database/Schemas/Number-schema.js');
const spliter = require('../lib/SplitOddAndEven');
let values;
let Odd = [];
let Even = [];
let numbers = [];


router.get('/', (req, res,next) => {
    res.render('./SplitOddAndEven.pug');
    next();
});

router.post('/addnumber',(req,res,next) => {
    numbers = spliter.addnumbers(req.body.number);
    res.render('./SplitOddAndEven.pug', { numbers : numbers});
    next();
});

router.post('/submit', async(req,res,next) => {
     values = spliter.split();
     Odd = values[0];
     Even = values[1];
     numbers = values[2];
    console.log('ODD Number : ' + Odd + ' EvenNumbers ' + Even+ ' Numbers ' + numbers);
    res.render('./SplitOddAndEven.pug', { numbers : numbers , Odd : Odd, Even : Even});
    next();
});



router.post('/delete',(req,res) => {
    res.render('./SplitOddAndEven.pug');
    Odd = '';
    Even = '';
    numbers = '';
    spliter.delete();
    console.log('numbers deleted');
    });

    module.exports = router;