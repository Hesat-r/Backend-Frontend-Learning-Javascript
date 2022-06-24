let _numbers=[];
let result = [];
let Numbers=[];
module.exports = {
    calculate: function (_divisor) {
        for (let i = 0; i < Numbers.length; i++) {
            if (Numbers[i] % _divisor == 0) {
                Numbers.push = ' ' + Numbers[i] + ' ';
            }
            
        }
        return Numbers;
    },
    addnumbers: function (_numbers) {
        if(_numbers < 0){
            return 'Sie müssen eine positive Zahl eingeben';
        }
        if(/^[0-9]+$/.test(_numbers)){
            Numbers.push(_numbers);
        }
        return [Numbers];
    }
}