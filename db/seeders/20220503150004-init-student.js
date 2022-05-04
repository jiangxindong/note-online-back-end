'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'student',
      [
        {
          student_name: 'Jenny',
          student_age: 20,
          student_sex: 0,
        },
        {
          student_name: 'Danny',
          student_age: 21,
          student_sex: 1,
        },
        {
          student_name: 'LiMing',
          student_age: 24,
          student_sex: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('student', null, {});
  },
};
