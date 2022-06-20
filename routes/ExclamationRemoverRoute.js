const express = require('express');
const router = express.Router();


router.get('/', (req, res,next) => {
    res.render('./ExclamationRemover.pug');
    next();
});

router.post('/',(req,res,next) => {
    console.log(req.body.text);
    console.log(req.body)
    res.render('./ExclamationRemover.pug');
    next();

});

module.exports = router;