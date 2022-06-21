const express = require('express');
const router = express.Router();
let calc;
let result = 0;
let values = [];
router.get('/', (req, res,next) => {
    res.render('./PointCalc.pug');
    next();
});


function Calculator(number1,number2) {
    if(number1 === '' || number2 === ''){
        calc = 'You need to add a Number for Number 1 and Number 2';
       
    }else if(number1 === number2){
        calc = 1;
    }else if(number1 > number2){
        calc = 3;
    }else if(number1 < number2){
        calc = 0;
    }
    if(result === NaN){
        result = 1;
    }
    values.push(number1 + ' : ' + number2);

    result = calc + result;
    console.log(result);
    console.log(values);
}

router.post('/', (req, res,next) => {
    Calculator(req.body.number1,req.body.number2);
    res.render('./PointCalc.pug', { result: result });
    next();
});




router.post('/delete', (req, res,next) => {
    result = 0;
    calc = 0;
    values = [];
    req.body.number1 = 0;
    req.body.number2 = 0;
    res.render('./PointCalc.pug');
    next();
    });

module.exports = router;