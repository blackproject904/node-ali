'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn(
          'auth',
          'token',{
            type: Sequelize.TEXT()
          },{transaction: t}
        )
      ]).then(()=>{})
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t=>{
      return Promise.all([
        queryInterface.changeColumn(
          'auth',
          'token',{
            type: Sequelize.STRING(128)
          },{transaction: t}
        )
      ]).then(()=>{})
    })
  }
};
