const express = require('express');
const router = express.Router();
const Divisible = require('../lib/Divisible');
let numbers= [];
router.get('/', (req, res,next) => {
    res.render('Divisible.pug');
    next();
});

router.get('/AddNumber', (req,res,next) => {
    res.render('Divisible.pug');
    next();
});
router.post('/AddNumber', (req,res,next) => {
    console.log(Divisible.addnumbers(req.body.input));
    res.render('Divisible.pug');
    next();
});
router.get('/Result', (req,res,next) => {
    res.render('Divisible.pug');
    next();
});
router.post('/Result', (req,res,next) => {
    numbers = Divisible.calculate(2);
    console.log(numbers);
    res.render('Divisible.pug');
    next();
});
module.exports = router;