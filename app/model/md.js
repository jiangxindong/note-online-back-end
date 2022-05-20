'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;

  const Md = app.model.define(
    'md',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING(30),
      parentId: INTEGER,
      isLeaf: BOOLEAN,
      content: STRING,
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

  return Md;
};
