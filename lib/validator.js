const {
  getCaster
} = require('../lib/types.js');

class Validator {
  constructor(field, configuration) {
    this.field = field;
    this.configuration = configuration;
  }
  validate(obj) {
    if(!Object.prototype.hasOwnProperty.call(obj, this.field)) {
      if(this.configuration.required) {
        throw new Error('required field is missing');
      }
      return undefined;
    }
    const caster = getCaster(this.configuration.type);
    if(caster) {
      return caster(obj[this.field]);
    }
    throw new Error(`No caster for type ${this.configuration.type}`);
  }
}

module.exports = {
  Validator
};
