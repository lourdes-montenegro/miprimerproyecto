
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Clientes', [
      {
        name: 'Juan Pérez',
        email: 'juan@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'María Rodríguez',
        email: 'maria@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Clientes', null, {});
  }
};
