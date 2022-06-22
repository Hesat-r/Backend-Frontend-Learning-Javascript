const express = require('express');
const router = express.Router();
const Abbreviate = require('../lib/AbbreviateName');
router.get('/', (req,res,next) => {
    res.render('./AbbreviateName.pug');
    next();
});

router.post('/', (req,res,next) => {
    console.log(Abbreviate.Abbreviate(req.body.input));
    res.render('./AbbreviateName.pug');
    next();
});

module.exports = router;

