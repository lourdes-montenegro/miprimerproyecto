const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./heladoRoutes'));

app.set('views', path.join(__dirname, 'src', 'views'));

app.listen(5000, ()=>{
    console.log('SERVER corriendo en http://localhost:5000');
});