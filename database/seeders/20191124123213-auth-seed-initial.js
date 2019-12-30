'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('auth', 
    [
      {
        user: 'Sayed Khaidir Ali',
        email: 'blackproject904@gmail.com',
        password: '1234567890',
        token: 'n/a'
      },
      {
        user: 'oplovers',
        email: 'ugrond@gmail.com',
        password: '1234567890',
        token: 'n/a'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};
