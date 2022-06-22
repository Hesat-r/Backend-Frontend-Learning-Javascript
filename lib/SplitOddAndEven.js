
const NumberSchema = require('/Users/hesatredzepi/Desktop/SplittOddAndEven/Database/Schemas/Number-schema.js');
let Numbers=[];
let OddNumbers=[];
let EvenNumbers=[];
Numbers.push();
module.exports = {
    split: function () {
        for (let i = 0; i < Numbers.length; i++) {
            if (Numbers[i] % 2 == 0) {
                EvenNumbers.push(Numbers[i]);
            } else {
                OddNumbers.push(' '+ Numbers[i] + ' ');
            }
        }

        const number = {
            numbers: Numbers,
            oddNumbers: OddNumbers,
            evenNumbers: EvenNumbers
        }
          new NumberSchema(number).save();
          console.log('Backend' + EvenNumbers)
        return [OddNumbers, EvenNumbers,Numbers];
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
    delete: function(){
        Numbers = [];
        OddNumbers = [];
        EvenNumbers = [];
        return [Numbers,OddNumbers,EvenNumbers];
    },

Numbers,
OddNumbers,
EvenNumbers

    };

