const { text } = require('body-parser');
const express = require('express');
const ExclamationSchema = require('../Database/Schemas/Exclamation-schema');
const router = express.Router();
let result = '';

router.get('/', (req, res,next) => {
    res.render('./ExclamationRemover.pug');
    next();
});

function removeExclamation(_string) {
    let textwithoutexclamation = '';
    for (let i = 0; i < _string.length; i++) {
        let char = _string[i];
        if (char !== '!') {
            textwithoutexclamation += char;
        }
    }
    return textwithoutexclamation;
}
router.post('/',async (req,res,next) => {
    console.log(req.body.text);
    result = removeExclamation(req.body.text);
    console.log(result);
    res.render('./ExclamationRemover.pug', { result: result });
    const exclamation = {
        blanktext: req.body.text,
        result: result
    }

    await  new ExclamationSchema(exclamation).save();
    next();

});

module.exports = router;