const {
  mkdirp
} = require('../lib/fsfuncs.js');

const mockfs = {
  mkdir: jest.fn()
};

jest.mock('fs', () => mockfs);

describe ('fsfuncs module', () => {
  it('makes nested directories', () => {
    return mkdirp('some/nested/dirs')
      .then(expect(mockfs.mkdir).toHaveBeenCalledWith('some/nested/dirs', { recursive: true }));
  });
});
