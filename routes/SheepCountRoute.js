const express = require('express');
const router = express.Router();
const SheepCounter = require('../lib/SheepCounter');
let result;
router.get('/', (req, res,next) => {
    res.render('./SheepCounter.pug');
    next();
});
router.post('/', (req,res,next) => {
    result = SheepCounter.count(req.body.sheepinput);
    console.log(result);
    res.render('./SheepCounter.pug', {result: result});
    next();
});
module.exports = router;