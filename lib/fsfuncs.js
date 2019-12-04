const fs = require('fs').promises;

function mkdirp(path) {
  return fs.mkdir(path, { recursive: true });
}

function writeJSON(file, content) {
  return fs.writeFile(file, JSON.stringify(content));
}

module.exports = {
  mkdirp,
  writeJSON
};
