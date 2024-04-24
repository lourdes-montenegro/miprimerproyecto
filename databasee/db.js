const mysql = require ('mysql2')

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyecto-helados'
})

conexion.connect((error) =>{
if(error){
    console.log(error.message);
    return
}
console.log('conectado a la db');
})
module.exports = conexion