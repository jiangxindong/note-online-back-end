'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('student', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      student_name: {
        allowNull: false,
        type: Sequelize.STRING(10),
      },
      student_age: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      student_sex: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('student');
  },
};
