'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Helados', 'id', {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Helados', 'id');
  }
};
