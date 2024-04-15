const { Sequelize } = require('sequelize');

// Configura la conexión a la base de datos
const sequelize = new Sequelize('proyecto-helados', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
