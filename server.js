const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use('/', require('./routes/main'));


app.listen(3000, function(){
    console.log('🚢Your server is docked at Port 3000🚢')
})