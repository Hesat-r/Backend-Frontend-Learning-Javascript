module.exports = {
    Abbreviate: function(_name) {
        let names = _name.split(' ');
        let abbreviation = '';
        for (let i = 0; i < names.length; i++) {
            abbreviation += names[i].charAt(0) + '.';
        }
        return abbreviation;
    }
};