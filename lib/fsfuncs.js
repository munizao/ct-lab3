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

function readDirectoryJSON(dir) {
  return fs.readdir(dir)
    .then(fileArray => {
      return fileArray.map(file => readJSON(file));
    });
}

function updateJSON(file, patch) {
  return readJSON(file)
    .then((obj) => {
      const updated = Object.assign(obj, patch);
      return writeJSON(file, updated);
    });
}

module.exports = {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON
};
