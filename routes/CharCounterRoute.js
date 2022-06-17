const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

router.get('/', (req, res,next) => {
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
    res.render('./CharCounter.pug', { charCount: charCount });
    console.log(charCount);
    next();
});


module.exports = router;