const { text } = require('body-parser');
const express = require('express');
const router = express.Router();
let result = '';

router.get('/', (req, res,next) => {
    res.render('./ExclamationRemover.pug');
    next();
});

function removeExclamation(string) {
    let textwithoutexclamation = '';
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char !== '!') {
            textwithoutexclamation += char;
        }
    }
    return textwithoutexclamation;
}
router.post('/',(req,res,next) => {
    console.log(req.body.text);
    result = removeExclamation(req.body.text);
    console.log(result);
    res.render('./ExclamationRemover.pug', { result: result });
    next();

});

module.exports = router;