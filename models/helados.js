const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Helado = sequelize.define('Helado', {
  sabor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = Helado;
