'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('auth', 
      { 
        id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
        user: {
                type: Sequelize.STRING,
                uniqueKey: true
              },
        email: Sequelize.STRING
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('auth');
  }
};
