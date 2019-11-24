'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('auth', 
    [
      {
        user: 'Sayed Khaidir Ali',
        email: 'blackproject904@gmail.com'
      },
      {
        user: 'oplovers',
        email: 'ugrond@gmail.com'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};
