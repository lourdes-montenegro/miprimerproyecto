const express = require('express');
const path = require('path');
const app = express();
const Sequelize = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.development);

const port = process.env.PORT || 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

const helados = [
  { id: 1, name: 'Helado de chocolate' },
  { id: 2, name: '' },
  { id: 3, name: '' },
];

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
