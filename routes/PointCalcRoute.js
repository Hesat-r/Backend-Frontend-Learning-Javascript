const express = require('express');
const router = express.Router();
const PointCalculator = require('../lib/PointCalculator');
let calc;
let result = 0;
let values = [];
router.get('/', (req, res,next) => {
    res.render('./PointCalc.pug');
    next();
});




router.post('/', (req, res,next) => {
   result = PointCalculator.count(req.body.number1,req.body.number2)[0];
   console.log(result);
    res.render('./PointCalc.pug', { result: result });
    next();
});




router.post('/delete', (req, res,next) => {
    PointCalculator.delete();
    res.render('./PointCalc.pug');
    next();
    });

module.exports = router;