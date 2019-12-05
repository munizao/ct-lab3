const fs = require('fs').promises;

const {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON,
  deleteFile
} = require('../lib/fsfuncs.js');

jest.mock('fs', () => ({
  promises: {
    mkdir: jest.fn(() => Promise.resolve()),
    writeFile: jest.fn(() => Promise.resolve()),
    readFile: jest.fn(() => Promise.resolve(JSON.stringify({ name: 'frodo', age: 33 }))),
    readdir: jest.fn(() => Promise.resolve(['one', 'two', 'three']))
  }
}));

describe ('fsfuncs module', () => {
  const exampleObj = {
    name: 'frodo',
    age: 33
  };

  it('makes nested directories', () => {
    return mkdirp('some/nested/dirs')
      .then(() => expect(fs.mkdir).toHaveBeenCalledWith('some/nested/dirs', { recursive: true }));
  });

  it('writes an obect as JSON to a file', () => {
    const json = JSON.stringify(exampleObj);
    return writeJSON('out.json', exampleObj)
      .then(() => expect(fs.writeFile).toHaveBeenCalledWith('out.json', json));
  });

  it('reads a file with a JSON string to an object', () => {
    readJSON('obj.json')
      .then(() => expect(fs.readFile).toHaveBeenCalledWith('obj.json'));
  });

  it('reads all files in a dir into an array of objects', () => {
    Promise.all(readDirectoryJSON('dir'))
      .then(() => expect(fs.readdir).toHaveBeenCalledWith('dir') && 
        expect(fs.readFile).toHaveBeenCalledTimes(3));
  });

  it('updates a JSON file', () => {
    const patchObj = {
      weight: '10 lb'
    };

    const patchedObj = {
      name: 'frodo',
      age: 33,
      weight: '10 lb'
    };
    const patchedJson = JSON.stringify(patchedObj);
    return updateJSON('out.json', patchObj)
      .then(() => {
        expect(fs.writeFile).toHaveBeenCalledWith('out.json', patchedJson);
      });
  });

  it ('deletes a file', () => {
    return deleteFile('deleted.txt')
      .then(() => {
        expect(fs.unlink).toHaveBeenCalledWith('deleted.txt');
      });
  });
});

