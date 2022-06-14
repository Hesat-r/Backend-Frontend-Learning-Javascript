const express  = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');

app.get('/OddAndEven', (req, res) => {
    res.render('./index.pug');
});

app.listen(3000);
console.log('Server is running on port 3000');