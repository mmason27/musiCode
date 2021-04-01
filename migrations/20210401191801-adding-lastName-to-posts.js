'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Posts', "lastName", {
      type: Sequelize.STRING
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Posts', "lastName")
  }
};
