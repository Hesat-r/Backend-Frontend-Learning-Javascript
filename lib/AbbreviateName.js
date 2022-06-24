module.exports = {
    Abbreviate: function(_name) {
        const AbbreviateNameSchema = require('../Database/Schemas/Count-schema');
        let names = _name.split(' ');
        let abbreviation = '';
        if(names.length > 2){
            return 'Name is too long';
        }
        for (let i = 0; i < names.length; i++) {
            abbreviation += names[i].charAt(0) + '.';
        }
        const AbbreviateName = {
            blanktext: names,
            result: abbreviation
            
        }
        
           new AbbreviateNameSchema(AbbreviateName).save();

        return abbreviation;
    }
};