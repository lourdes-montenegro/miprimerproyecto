const express = require('express');
const path = require('path')
const app = express()
// app.length('/', (req, res) => {
//     res.send('Hola mundo :)')
// })
const port = 3000
app.listen(port, () => {
    console.log('servidor corriendo')
})
    ;
app.get('/', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/home.html')
    res.sendFile(htmlPath)

})