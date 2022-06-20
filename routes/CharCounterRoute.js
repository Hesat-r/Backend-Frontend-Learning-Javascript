const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

let char;
let count; 
let charCountString = '';
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

router.post('/count', (req, res,next) => {
    let string = req.body.chars;
    let charCount = {};
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
   char = Object.keys(charCount);
   count = Object.values(charCount); 

    for (let i = 0; i < char.length; i++) {
        charCountString += ' '+  char[i] + ' : '  + count[i];
    }
    res.render('./CharCounter.pug', { result: charCountString });
    console.log(charCount); 
    next();
});


module.exports = router;