'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define(
    'user',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      username: {
        unique: true,
        type: STRING(30),
      },
      password: STRING(10),
      nickName: STRING(10),
      phoneNumber: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    },
    {
      // auto use timestamps
      timestamps: true,
      // disable converting table names to plural
      freezeTableName: true,
    }
  );

  return User;
};
