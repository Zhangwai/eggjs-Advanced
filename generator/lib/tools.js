const fs = require('fs');
const path = require('path');

/**
 *
 * @param {*} filePath
 * @param {*} callback
 * @description 结果通过回调函数的形式把结果导出解决异步
 */
function fileDisplay(filePath, callback) {
  fs.readdir(filePath, (err, files) => {
    if (err) {
      console.error(err);
    } else {
      files.forEach(filename => {
        // 获取当前文件的绝对路径
        const filedir = path.join(filePath, filename);
        // 根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, (err, stats) => {
          if (err) {
            console.error(err);
          } else {
            const isFile = stats.isFile();// 是文件
            const isDir = stats.isDirectory();// 是文件夹
            if (isFile) {
              callback(filedir);
              // configs.push(filedir);
            }
            if (isDir) {
              fileDisplay(filedir, callback);// 递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        });
      });
    }
  });
}
module.exports = {
  fileDisplay,
};
