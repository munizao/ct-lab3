const fs = require('fs').promises;

function mkdirp(path) {
  return fs.mkdir(path, { recursive: true });
}

module.exports = {
  mkdirp
};

//Promise.resolve(mkdirp('some/stuff'));
