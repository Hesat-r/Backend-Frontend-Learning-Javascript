let calc;
let result = 0;
let values = [];
let resultarray = [];
const PointCountSchema = require('../Database/Schemas/PointCounter-schema');
module.exports = {
    count: function (_number1,_number2) {

        if(_number1 === '' || _number2 === ''){
            calc = 'You need to add a Number for Number 1 and Number 2';
           
        }else if(_number1 === _number2){
            calc = 1;
        }else if(_number1 > _number2){
            calc = 3;
        }else if(_number1 < _number2){
            calc = 0;
        }
        if(result === NaN){
            result = 1;
        }
        values.push(_number1 + ' : ' + _number2);
    
        result = calc + result;
        resultarray.push(result);
        const pointcount = {
            values: values,
            result: resultarray
        }
    
           new PointCountSchema(pointcount).save();

        return[result,_number1,_number2,values];
    },
    delete: function(){
        result = 0;
        calc = 0;
        values = [];
        return [result,calc,values];
    }
};
