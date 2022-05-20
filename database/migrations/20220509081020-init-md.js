'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, BOOLEAN } = Sequelize;
    return queryInterface.createTable('md', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING(30),
      parentId: INTEGER,
      isLeaf: BOOLEAN,
      content: STRING,
      created_at: DATE,
      updated_at: DATE,
    });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('md');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  },
};
