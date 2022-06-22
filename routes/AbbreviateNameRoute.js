const express = require('express');
const router = express.Router();
const Abbreviate = require('../lib/AbbreviateName');
let result;
router.get('/', (req,res,next) => {
    res.render('./AbbreviateName.pug');
    next();
});

router.post('/', (req,res,next) => {
    result = Abbreviate.Abbreviate(req.body.input);
    res.render('./AbbreviateName.pug', { result : result});
    next();
});

module.exports = router;

