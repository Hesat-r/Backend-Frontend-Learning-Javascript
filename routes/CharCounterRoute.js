const express = require('express');
const router = express.Router();
const CountSchema = require('../Database/Schemas/Count-schema');
const charcounter = require('../lib/charcounter');
let result;



router.get('/', (req, res,next) => {
    res.render('./CharCounter.pug');
    next();
});

router.post('/delete',(req,res,next) => {
    charcounter.deletecounter();
    res.render('./CharCounter.pug');
    console.log('deleted');
    next();
});

router.post('/', async (req, res,next) => {
    result = charcounter.counter(req.body.chars)[0];
   
    res.render('./CharCounter.pug', { result : result});
   
    console.log(result);

    next();
});


module.exports = router;