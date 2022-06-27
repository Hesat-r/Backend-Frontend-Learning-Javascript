let result = [];
let Numbers=[];
let divisor;
const DivisibleSchema = require('../Database/Schemas/Divisible-schema');
module.exports = {
    calculate: function (_divisor) {
        for (let i = 0; i < Numbers.length; i++) {
            if (Numbers[i] % _divisor === 0) {
                result.push(' ' + Numbers[i] + ' ');
            }
            
        }
        divisor = _divisor;

        const Divisible = {
            addedNumbers: Numbers,
            Divided: divisor,
            result: result
            
        }
        if(Numbers && divisor && result){
        
           new DivisibleSchema(Divisible).save();
        }
        return result;
    },
    addnumbers: function (_numbers) {
        if(_numbers < 0){
            return 'Sie müssen eine positive Zahl eingeben';
        }
        if(/^[0-9]+$/.test(_numbers)){
            Numbers.push(_numbers);
        }
        return [Numbers];
    },
    delete : function () {
        result = [];
        Numbers = [];
        divisor = '';
    }
}