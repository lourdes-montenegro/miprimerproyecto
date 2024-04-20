const express = require('express');
const path = require('path');
const app = express();
const Sequelize = require('sequelize');
const config = require('./config');
const bodyParser = require('body-parser');
const multerMiddleware = require('./middlewares/multerMiddleware'); 
const sequelize = new Sequelize(config.development);
const port = process.env.PORT || 3002;
const Helado = sequelize.define('Helado', {
  nombre: Sequelize.STRING,
  descripcion: Sequelize.STRING,
  precio: Sequelize.DECIMAL
}, {
  tableName: 'helados',
  timestamps: false 
});

app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));



app.get('/', function (req, res) {
  Helado.findAll()
    .then(function(productos) {
      res.render('index', { productos: productos });
    })
    .catch(function(err) {
      console.error('Error al recuperar los productos:', err);
      res.status(500).send('Error interno del servidor');
    });
});



app.get('/', function (req, res) {
  res.render('index'); 
});



app.get('/register', function (req, res) {
  res.render('register'); 
});

app.listen(port, () => {
  console.log('Servidor corriendo en http://localhost:3002/');
});


  const heladoRoutes = require ('./routes/heladoRoutes')
  
  app.use('./', heladoRoutes)