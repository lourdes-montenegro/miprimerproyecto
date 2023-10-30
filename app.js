const express = require('express');

const app = express()
// app.length('/', (req, res) => {
//     res.send('Hola mundo :)')
// })
app.listen(3000, () => {
    console.log('servidor corriendo')
})  
    ;
app.get('/', (req, res) => {
    res.sendFile('./views/home.html')

})