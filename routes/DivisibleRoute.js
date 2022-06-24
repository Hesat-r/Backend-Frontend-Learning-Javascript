const express = require('express');
const router = express.Router();
const Divisible = require('../lib/Divisible');
let _divisible;
router.get('/', (req, res,next) => {
    res.render('Divisible.pug');
    next();
});

router.get('/AddNumber', (req,res,next) => {
    res.render('Divisible.pug');
    next();
});
router.post('/AddNumber', (req,res,next) => {
    addednumbers = Divisible.addnumbers(req.body.numberInput);
    _divisible = req.body.divisibleInput;
    res.render('Divisible.pug', {addedNumbers : addednumbers});
    next();
});
router.get('/Result', (req,res,next) => {
    res.render('Divisible.pug');
    next();
});
router.post('/Result', (req,res,next) => {
    numbers = Divisible.calculate(_divisible);
    
    res.render('Divisible.pug', {result: numbers});
    next();
});

router.get('/Delete', (req,res,next) => {
    res.render('Divisible.pug');
    next();
});
router.post('/Delete', (req,res,next) => {
    Divisible.delete();
    res.render('Divisible.pug');
    next();
});
module.exports = router;