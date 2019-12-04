const {
  mkdirp
} = require('../lib/fsfuncs.js');

describe ('fsfuncs module', () => {
  it('makes nested directories', () => {
    mkdirp('some/nested/dirs')
    .then(expect(mkdir).toHaveBeenCalledWith('some/nested/dirs', true));
  });
}
