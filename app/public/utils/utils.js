const fs = require('fs');
const path = require('path');

// get all files (including files of subfolder)
function getDirFiles(dir) {
  const dirFiles = [];
  function readDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filepath = dir + path.sep + file;
      const stat = fs.statSync(filepath);
      if (stat.isFile()) {
        dirFiles.push(filepath);
      } else {
        readDir(filepath);
      }
    });
  }
  readDir(dir);
  return dirFiles;
}
module.exports = {
  getDirFiles,
};
