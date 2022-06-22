module.exports = {
    Abbreviate: function(_name) {
        let names = _name.split(' ');
        let abbreviation = '';
        if(names.length > 2){
            return 'Name is too long';
        }
        for (let i = 0; i < names.length; i++) {
            abbreviation += names[i].charAt(0);
        }
        return abbreviation;
    }
};