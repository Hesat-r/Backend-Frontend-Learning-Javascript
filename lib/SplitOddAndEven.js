
const NumberSchema = require('/Users/hesatredzepi/Desktop/SplittOddAndEven/Database/Schemas/Number-schema.js');
let Numbers=[];
let OddNumbers=[];
let EvenNumbers=[];

module.exports = {
    split: function (_numbers) {
        for (let i = 0; i < _numbers.length; i++) {
            if (_numbers[i] % 2 == 0) {
                EvenNumbers.push(' '+ _numbers[i] + ' ');
            } else {
                OddNumbers.push(' '+ _numbers[i] + ' ');
            }
        }

        const number = {
            numbers: Numbers,
            oddNumbers: OddNumbers,
            evenNumbers: EvenNumbers
        }
          new NumberSchema(number).save();
        return [OddNumbers, EvenNumbers,_numbers];
    },
    addnumbers: function (_numbers) {
        if(_numbers < 0){
            return 'Sie müssen eine positive Zahl eingeben';
        }
        if(/^[0-9]+$/.test(_numbers)){
            Numbers.push(' '+_numbers + ' ');
        }
        return [Numbers];
    },

    };

