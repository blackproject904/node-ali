'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('otp', 
    { 
      id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
          },
      str_otp: Sequelize.STRING(6),
      on_create: Sequelize.DATE,
      expired: Sequelize.STRING(1),
      userdata: Sequelize.STRING
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('otp');
  }
};
