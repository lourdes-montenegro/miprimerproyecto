const express = require('express');
const path = require('path');
const app = express();
const Sequelize = require('sequelize');
const config = require('./config');
const bodyParser = require('body-parser');
const sequelize = new Sequelize(config.development);

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true })); // Middleware Body Parser

app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Define el modelo Helado utilizando sequelize.define
const Helado = sequelize.define('Helado', {
  nombre: Sequelize.STRING,
  descripcion: Sequelize.STRING,
  precio: Sequelize.DECIMAL
}, {
  tableName: 'helados', // Nombre de la tabla en la base de datos
  timestamps: false // Indica si se deben agregar los campos createdAt y updatedAt a la tabla
});

app.post('/guardarProducto', (req, res) => {
  // Obtén los datos del formulario
  const { nombre, descripcion, precio } = req.body;

  // Crea un nuevo helado utilizando el modelo Sequelize
  Helado.create({
    nombre: nombre,
    descripcion: descripcion,
    precio: precio
  })
  .then(() => {
    console.log('Producto guardado exitosamente en la base de datos');
    res.send('Producto guardado exitosamente');
  })
  .catch(err => {
    console.error('Error al guardar el producto:', err);
    res.status(500).send('Error interno del servidor');
  });
});

app.get('/', function (req, res) {
  res.render('index'); 
});

app.get('/listado-helados', function (req, res) {
  res.render('listadoHelados'); 
});

app.get('/register', function (req, res) {
  res.render('register'); 
});

app.listen(port, () => {
  console.log('Servidor corriendo en http://localhost:3000/');
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });
