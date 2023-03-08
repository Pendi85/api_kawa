'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.changeColumn (
        'Products',
        'description',
        Sequelize.TEXT
    ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
       Return a promise to correctly handle asynchronicity.

        Example:
         return queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('Products');
  }
};