const express = require('express');
const router = express.Router();

router.get('/', (req, res,next) => {
    res.render('./CharCounter.pug');
    next();
});

module.exports = router;