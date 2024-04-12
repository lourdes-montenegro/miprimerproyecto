const express = require('express');
const path = require('path')
const app = express()

const publicPath = path.resolve(__dirname, './public')

    app.use(express.static(publicPath));
app.set('view engine', 'ejs');
app.set('view', './views')
const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log('servidor corriendo en http://localhost:3001/ ')
})
    ;
app.get('/', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/home.ejs')
    res.sendFile(htmlPath) 
})
app.get('/', function(req, res) {
    res.render('./views/home'); // Esto renderizará home.ejs
});

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/register',(req, res) => 
res.sendFile(path.resolve(__dirname, './views/register.html'))
)

app.get('/login',(req, res) => 
res.sendFile(path.resolve(__dirname, './views/login.html'))
)