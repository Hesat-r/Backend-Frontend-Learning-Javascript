const express = require('express');
const router = express.Router();
const NumberSchema = require('/Users/hesatredzepi/Desktop/SplittOddAndEven/Database/Schemas/Number-schema.js');
const CountSchema = require('/Users/hesatredzepi/Desktop/SplittOddAndEven/Database/Schemas/Count-schema.js');
const ExclamationSchema = require('../Database/Schemas/Exclamation-schema.js');
const spliter = require('../lib/SplitOddAndEven');
const AbbreviateName = require('../Database/Schemas/AbbreviateName-schema.js');
const SheepCounter = require('../Database/Schemas/SheepCount-schema.js');
const Divisible = require('../Database/Schemas/Divisible-schema.js');
let Odd = spliter.OddNumbers;
let Even = spliter.EvenNumbers;
let numbers = spliter.Numbers;


router.get('/SplitOddAndEven/:id',async (req,res,next) =>{
    fetchid = req.params.id;
    await NumberSchema.findById(fetchid).then((result) => {
        res.send(result)
        })
        .catch((err) => {
            res.send(err)
        })
        console.log('SPLIT ID ' + fetchid);
        next();
});

router.get('/SplitOddAndEven',(req,res,next) => {
    res.json({"Numbers":numbers ,"OddNumbers":Odd, "EvenNumbers":Even});
   next();
});
router.get('/CharCounter/:id',async (req,res,next) =>{
    fetchid = req.params.id;
    await CountSchema.findById(fetchid).then((result) => {
        res.send(result)
        })
        .catch((err) => {
            res.send(err)
        })
        console.log('CHARCOUNTER ID ' + fetchid);
        next();
});
router.get('/ExclamationRemover/:id',async (req,res,next) =>{
    fetchid = req.params.id;
    await ExclamationSchema.findById(fetchid).then((result) => {
        res.send(result)
        })
        .catch((err) => {
            res.send(err)
        })
        console.log('EXCLAMATION ID ' + fetchid);
        next();
});
router.get('/AbbreviateName/:id',async (req,res,next) =>{
    fetchid = req.params.id;
    await AbbreviateName.findById(fetchid).then((result) => {
        res.send(result)
        })
        .catch((err) => {
            res.send(err)
        })
        console.log('ABBREVIATENAME ID ' + fetchid);
        next();
});
router.get('/SheepCounter/:id',async (req,res,next) =>{
    fetchid = req.params.id;
    await SheepCounter.findById(fetchid).then((result) => {
        res.send(result)
        })
        .catch((err) => {
            res.send(err)
        })
        console.log('SHEEPCOUNTER ID ' + fetchid);
        next();
});
router.get('/Divisible/:id',async (req,res,next) =>{
    fetchid = req.params.id;
    await Divisible.findById(fetchid).then((result) => {
        res.send(result)
        })
        .catch((err) => {
            res.send(err)
        })
        console.log('SHEEPCOUNTER ID ' + fetchid);
        next();
});
module.exports = router;