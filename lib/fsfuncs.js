const fs = require('fs').promises;

function mkdirp(path) {
  return fs.mkdir(path, { recursive: true });
}

function writeJSON(file, content) {
  return fs.writeFile(file, JSON.stringify(content));
}

function readJSON(file) {
  return fs.readFile(file)
    .then(string => JSON.parse(string));
}

module.exports = {
  mkdirp,
  writeJSON,
  readJSON
};
