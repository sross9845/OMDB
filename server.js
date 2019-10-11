const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function(req, res) {
    res.send('HOME ROUTE')
});

app.use('/results', require('./routes/results'));



app.listen(3000, function(){
    console.log('🚢Your server is docked at Port 3000🚢')
})