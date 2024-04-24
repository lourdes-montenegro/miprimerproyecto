const express = require('express');
const router = express.Router();

const conexion = require('./databasee/db');

router.get('/', (req, res)=>{     
    conexion.query('SELECT * FROM helados',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            res.render('index', {results:results});            
        }   
    })
})

router.get('/create', (req,res)=>{
    res.render('create');
})

router.get('/edit/:id', (req,res)=>{    
    const id = req.params.id;
    conexion.query('SELECT * FROM helados WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('edit.ejs', { helado: results[0] }); 
        }        
    });
});


router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM helados WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});

async function obtenerHelados() {
    try {
        // Realizar la consulta SQL para obtener los helados
        const [rows, fields] = await connection.query('SELECT * FROM helados');
        return rows; // Devolver los helados obtenidos de la base de datos
    } catch (error) {
        console.error('Error al obtener los helados:', error);
        throw error; // Lanzar el error para que pueda ser manejado por la aplicación
    }
}
router.get('/', async (req, res) => {
    try {
        const helados = await obtenerHelados(); // Obtener los helados
        res.render('index', { helados: helados }); // Renderizar la vista index con los helados
    } catch (error) {
        // Manejar el error si ocurre al obtener los helados
        res.status(500).send('Error interno del servidor');
    }
});
const crud = require('./controllers/crud');
exports.update = (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const stock = req.body.stock;

    // Ejecutar la consulta SQL para actualizar el producto en la base de datos
    conexion.query(
        'UPDATE helados SET nombre = ?, precio = ?, stock = ? WHERE id = ?',
        [nombre, precio, stock, id],
        (error, results) => {
            if (error) {
                console.error('Error al actualizar el producto:', error);
                // Manejar el error de alguna manera, por ejemplo, renderizando una vista de error
                res.render('error', { message: 'Error al actualizar el producto' });
            } else {
                // Producto actualizado correctamente, redirigir a alguna página de éxito o al listado de productos
                res.redirect('/');
            }
        }
    );
};

router.post('/save', crud.save);
router.post('/update', (req, res)=>{
res.render = crud.update;
})

module.exports = router;