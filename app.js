const express = require('express');
const path = require('path');
const app = express();

const Sequelize = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.development);


const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', __dirname, 'views');

const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log('Servidor corriendo en http://localhost:3002/');
});

app.get('/', function(req, res) {
    res.render('./views/home'); // Renderiza la vista 'index'
  });
  
  sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });
