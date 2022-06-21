const { text } = require('body-parser');
const express = require('express');
const ExclamationSchema = require('../Database/Schemas/Exclamation-schema');
const router = express.Router();
const ExclamationRemover = require('../lib/ExclamationRemover');
let result = '';

router.get('/', (req, res,next) => {
    res.render('./ExclamationRemover.pug');
    next();
});

router.post('/',async (req,res,next) => {
    result = ExclamationRemover.remove(req.body.text);
    console.log(result);
    res.render('./ExclamationRemover.pug', { result: result });
    next();

});

module.exports = router;