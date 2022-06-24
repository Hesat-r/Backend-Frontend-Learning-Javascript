module.exports = {
    count: function (_amount){
        const SheepCountSchema = require('../Database/Schemas/SheepCount-schema');
        let result ='';;
        for (let i = 1; i <= _amount; i++) {
            result += i + ' 🐑  ';
            
        }

        const Sheepcount = {
            amount: _amount,
            result: result
            
        }
        
           new SheepCountSchema(Sheepcount).save();

        return result;
    }
}