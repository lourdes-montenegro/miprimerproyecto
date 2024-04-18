
'use strict';
const models = require('../models/Cliente');
const Cliente = models.Cliente;

module.exports = {
  up: async () => {
    await Cliente.bulkInsert([
      {
        name: 'Juan Pérez',
        email: 'juan@example.com'
      },
      {
        name: 'María Rodríguez',
        email: 'maria@example.com'
      },
    ]);
  },

  down: async () => {
    await Cliente.destroy({ where: {} });
  }
};
