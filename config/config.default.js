'use strict';

module.exports = appInfo => {
  const config = (exports = {});
  // 关闭跨域请求拒绝
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_199801030000';

  // sign middleware
  config.middleware = ['errorHandler', 'verifyToken'];

  // set middleware
  config.verifyToken = {
    secret: '199801030000',
  };

  // change to your own sequelize configurations
  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'school',
    username: 'root',
    password: 'root',
    timezone: '+08:00',
    dialectOptions: {
      // format date
      dateStrings: true,
      typeCast(field, next) {
        if (field.type === 'DATETIME' || field.type === 'DATE') {
          return field.string();
        }
        return next();
      },
    },
  };

  return config;
};
