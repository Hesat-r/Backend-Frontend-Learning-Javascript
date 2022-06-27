
module.exports = {
    counter: function (_string) {
        const CountSchema = require('../Database/Schemas/Count-schema');
        let char;
        let count;
        let charCount = {}; 
        let charCountString = '';
            for (let i = 0; i < _string.length; i++) {
                let char = _string[i];
                if (charCount[char]) {
                    charCount[char]++;
                } else {
                    charCount[char] = 1;
                }
            }
           char= Object.keys(charCount);
           count = Object.values(charCount); 
        
            for (let i = 0; i < char.length; i++) {
        
                if(char[i] === ' '){
                    char[i] = ' Space ';
                }
                charCountString += ' '+  char[i] + ' : '  + count[i];
               
            }
            const chars = {
                chars: char,
                count: count,
                result: charCountString
                
            }
            if(char && count && charCountString){
               new CountSchema(chars).save();
            }
            return [charCountString, char, count, charCount];
        },
    deletecounter: function(){
        charCountString = '';
        char = '';
        count = '';
        return [charCountString, char, count];
    }
    };

