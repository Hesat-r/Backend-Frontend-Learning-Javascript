
module.exports = {
    remove: function (_string) {
        const ExclamationSchema = require('../Database/Schemas/Exclamation-schema');
        let textwithoutexclamation = '';
        for (let i = 0; i < _string.length; i++) {
            let char = _string[i];
            if (char !== '!') {
                textwithoutexclamation += char;
            }
        }

        const exclamation = {
            blanktext: _string,
            result: textwithoutexclamation
        }
    
           new ExclamationSchema(exclamation).save();

        return textwithoutexclamation;
        },

    };

