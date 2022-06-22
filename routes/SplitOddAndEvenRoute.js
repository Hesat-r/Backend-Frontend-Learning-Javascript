const express = require('express');
const router = express.Router();
const NumberSchema = require('/Users/hesatredzepi/Desktop/SplittOddAndEven/Database/Schemas/Number-schema.js');
const spliter = require('../lib/SplitOddAndEven');
let values;
let Odd;
let Even;
let numbers;;
router.get('/', (req, res,next) => {
    res.render('./SplitOddAndEven.pug');
    next();
});

router.post('/addnumber',(req,res,next) => {
    Numbers = spliter.addnumbers(req.body.number);
    res.render('./SplitOddAndEven.pug');
    next();
});

router.post('/submit', async(req,res,next) => {
    res.render('./SplitOddAndEven.pug');
     values = spliter.split();
     Odd = values[0];
     Even = values[1];
     numbers = values[2];
    console.log('ODD Number : ' + Odd + ' EvenNumbers ' + Even+ ' Numbers ' + numbers);
    next();
});

router.get('/api/:id',async (req,res,next) =>{
    fetchid = req.params.id;
    await NumberSchema.findById(fetchid).then((result) => {
        res.send(result)
        })
        .catch((err) => {
            res.send(err)
        })
        console.log('ID ROUTE ' + fetchid);
        next();
});

router.get('/api',(req,res,next) => {
    res.json({"Numbers":numbers ,"OddNumbers":Odd, "EvenNumbers":Even});
   next();
});


router.post('/delete',(req,res) => {
    res.render('./SplitOddAndEven.pug');
    Numbers.length = 0;
    OddNumbers.length = 0;
    EvenNumbers.length = 0;
    spliter.delete();
    console.log(Numbers);
    });

    module.exports = router;