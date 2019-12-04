fs = require('fs').promises;

function mkdirp(path) {
  return fs.mkdir(path, true);
}

