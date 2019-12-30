'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          'auth',
          'password',
          {
            type: Sequelize.STRING(64),
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'auth',
          'token',
          {
            type: Sequelize.STRING(128)
          },
          { transaction: t }
        )
      ])
      .then(() => {})
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('auth','password',{ transaction: t}),
        queryInterface.removeColumn('auth','token',{ transaction: t}),
      ])
    })
  }
};
