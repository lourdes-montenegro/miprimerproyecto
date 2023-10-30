const express = require('express');

const app = express()
// app.length('/', (req, res) => {
//     res.send('Hola mundo :)')
// })
app.listen(3000, () => 
    console.log('servidor corriendo'))

app.get('/', function(req, res) {
    res.send('Bienvenidos al sitio')

})