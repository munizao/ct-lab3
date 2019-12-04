const fs = require('fs').promises;

const {
  mkdirp,
  writeJSON,
  readJSON
} = require('../lib/fsfuncs.js');

jest.mock('fs', () => ({
  promises: {
    mkdir: jest.fn(() => Promise.resolve()),
    writeFile: jest.fn(() => Promise.resolve())
  }
}));

describe ('fsfuncs module', () => {
  it('makes nested directories', () => {
    return mkdirp('some/nested/dirs')
      .then(expect(fs.mkdir).toHaveBeenCalledWith('some/nested/dirs', { recursive: true }));
  });

  it('writes an obect as JSON to a file', () => {
    const obj = {
      name: 'frodo',
      age: 33
    };
    const json = JSON.stringify(obj);
    return writeJSON('out.json', obj)
      .then(expect(fs.writeFile).toHaveBeenCalledWith('out.json', json));
  });

  it('reads a file with a JSON string to an object', () => {
    const obj = readJSON('obj.json')
    .then(expect(fs.readFile).toHaveBeenCalledWith('obj.json'));
  });
});

