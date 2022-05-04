const path = require('path');
const { getDirFiles } = require('./public/utils/utils');

module.exports = app => {
  const routerPath = path.join(__dirname, './routes');
  const routerFiles = getDirFiles(routerPath);
  routerFiles.forEach(file => require(file)(app));
};
