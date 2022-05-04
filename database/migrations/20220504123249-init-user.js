'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { STRING, INTEGER, DATE } = Sequelize;
    return queryInterface.createTable('user', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      username: {
        unique: true,
        type: STRING(10),
      },
      password: STRING(10),
      nickName: STRING(10),
      phoneNumber: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('user');
  },
};
