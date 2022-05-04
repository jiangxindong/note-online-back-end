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
  config.keys = appInfo.name + '_{{keys}}';

  // add your config here
  config.middleware = [];

  // change to your own sequelize configurations
  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'school',
    username: 'root',
    password: 'root',
  };

  return config;
};
