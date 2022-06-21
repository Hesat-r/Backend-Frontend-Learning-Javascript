const express = require('express');
const router = express.Router();
let calc;
let result = 0;
let values = [];
router.get('/', (req, res,next) => {
    res.render('./PointCalc.pug');
    next();
});

router.post('/', (req, res,next) => {

    if(req.body.number1 === '' || req.body.number2 === ''){
        calc = 'You need to add a Number for Number 1 and Number 2';
       
    }else if(req.body.number1 === req.body.number2){
        calc = 1;
    }else if(req.body.number1 > req.body.number2){
        calc = 3;
    }else if(req.body.number1 < req.body.number2){
        calc = 0;
    }
    if(result === NaN){
        result = 1;
    }
    values.push(req.body.number1 + ' : ' + req.body.number2);

    result = calc + result;
    console.log(result);
    console.log(values);
    res.render('./PointCalc.pug', { result: result });
    next();
    });

module.exports = router;