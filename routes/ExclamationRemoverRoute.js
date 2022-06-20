const express = require('express');
const router = express.Router();

router.get('/', (req, res,next) => {
    res.render('./ExclamationRemover.pug');
    next();
});

router.post('/',(req,res,next) => {

    let  inputtext = req.body;
    let  result = inputtext;
    console.log(result);
    res.render('./ExclamationRemover.pug', { result: result });
    next();

});

module.exports = router;