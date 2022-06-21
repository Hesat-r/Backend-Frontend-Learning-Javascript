
module.exports = {
    counter: function (_string) {
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
               return charCount;
            }
        }
    };

