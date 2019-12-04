const fs = require('fs').promises;

const {
  mkdirp
} = require('../lib/fsfuncs.js');

jest.mock('fs', () => ({
  promises: {
    mkdir: jest.fn(() => Promise.resolve())
  }
}));

describe ('fsfuncs module', () => {
  it('makes nested directories', () => {
    return mkdirp('some/nested/dirs')
      .then(expect(fs.mkdir).toHaveBeenCalledWith('some/nested/dirs', { recursive: true }));
  });
});

