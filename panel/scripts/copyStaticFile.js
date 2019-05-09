const fs = require('fs');
const path = require('path');

const checkDirectory = (src, dst, callback) => {
  fs.access(dst, fs.constants.F_OK, err => {
    if (err) {
      fs.mkdirSync(dst);
      callback(src, dst);
    } else {
      callback(src, dst);
    }
  });
};

const copy = (src, dst) => {
  const paths = fs.readdirSync(src); // 同步读取当前目录
  paths.forEach(pathname => {
    const _src = `${src}/${pathname}`;
    const _dst = `${dst}/${pathname}`;
    fs.stat(_src, (err, stats) => {
      // stats  该对象 包含文件属性
      if (err) throw err;
      if (stats.isFile()) {
        // 如果是个文件则拷贝
        const readable = fs.createReadStream(_src); // 创建读取流
        const writable = fs.createWriteStream(_dst); // 创建写入流
        readable.pipe(writable);
      } else if (stats.isDirectory()) {
        // 是目录则 递归
        checkDirectory(_src, _dst, copy);
      }
    });
  });
};

const SOURCES_DIRECTORY = path.resolve(__dirname, '../../src/dist'); // 源目录
const DEST_DIRECTORY = path.resolve(
  __dirname,
  '../../SketchTemplate1.sketchplugin/Contents/Resources/_webpack_resources',
);
checkDirectory(SOURCES_DIRECTORY, DEST_DIRECTORY, copy);
