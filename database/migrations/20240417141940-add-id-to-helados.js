'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Productos', 'id', {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Productos', 'id');
  }
};
