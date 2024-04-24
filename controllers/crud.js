const conexion = require('../databasee/db');

exports.save = (req, res) => {
    const helado = req.body.nombre;
    const precio = req.body.precio;
    const stock = req.body.stock;
    const imagen = req.body.imagen;
    conexion.query('INSERT INTO helados SET ?', { nombre: helado, precio: precio, stock: stock, imagen: imagen }, (error, results) => {
        if (error) {
            console.log(error)
        }
        else{
            res.redirect('/');
        }
    });
};

exports.mostrarHelados = (req, res) => {
    conexion.query('SELECT * FROM helados', (error, results) => {
        if (error) {
            console.error(error);
            // Manejar el error de alguna manera, por ejemplo, renderizando una vista de error
            res.render('error', { message: 'Error obteniendo los helados' });
        } else {           
            // Renderizar la vista index.ejs con los resultados obtenidos de la consulta
            res.render('index.ejs', { helados: results });
  
        }
    });
};
