const express = require('express');
const path = require('path')
const app = express()

const publicPath = path.resolve(__dirname, './public')

    app.use(express.static(publicPath));

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log('servidor corriendo')
})
    ;
app.get('/', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/home.html')
    res.sendFile(htmlPath) 

})
app.get('/register',(req, res) => 
res.sendFile(path.resolve(__dirname, './views/register.html'))
)


// 
// 
// 
// 
// 
// 

const cartInfo = document.querySelector('')