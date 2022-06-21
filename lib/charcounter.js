class charcounter{

    function counter(_string){
        let string = req.body.chars;
        let charCount = {};
        for (let i = 0; i < string.length; i++) {
            let char = string[i];
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
    }

}