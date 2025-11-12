const readFile = fs => {
  const fs = require('fs');
  const os = require('os');
  const platform = os.platform();
  const isLinux = platform === 'linux';
  return fs
    .readFileSync(isLinux ? '/dev/stdin' : './index.txt')
    .toString()
    .trim();
};

module.exports = {
  readFile,
};
