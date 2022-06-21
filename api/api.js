const express = require('express');
const router = express.Router();
const NumberSchema = require('/Users/hesatredzepi/Desktop/SplittOddAndEven/Database/Schemas/Number-schema.js');
const CountSchema = require('/Users/hesatredzepi/Desktop/SplittOddAndEven/Database/Schemas/Count-schema.js');
const ExclamationSchema = require('../Database/Schemas/Exclamation-schema.js');

router.get('/SplitOddAndEven/:id',async (req,res,next) =>{
    fetchid = req.params.id;
    await NumberSchema.findById(fetchid).then((result) => {
        res.send(result)
        })
        .catch((err) => {
            res.send(err)
        })
        console.log('ID ROUTE ' + fetchid);
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
        console.log('ID ROUTE ' + fetchid);
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
        console.log('ID ROUTE ' + fetchid);
        next();
});

module.exports = router;