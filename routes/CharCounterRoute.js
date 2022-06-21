const express = require('express');
const router = express.Router();
const CountSchema = require('../Database/Schemas/Count-schema');
const charcounter = require('../lib/charcounter');
let char;
let count; 
let charCountString = '';

const chars2 = {
    chars: charCountString
    
}

router.get('/', (req, res,next) => {
    res.render('./CharCounter.pug');
    next();
});

router.post('/delete',(req,res,next) => {
    charCountString = '';
    char = '';
    count = '';
    res.render('./CharCounter.pug');
    next();
});

router.post('/count', async (req, res,next) => {

    console.log(charcounter.counter(req.body.chars));
   
    res.render('./CharCounter.pug');
   

    const chars = {
        chars: char,
        count: count,
        result: charCountString
        
    }
    
    await  new CountSchema(chars).save();
    next();
});


module.exports = router;