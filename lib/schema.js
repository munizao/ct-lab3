const {
  Validator
} = require('../lib/validator.js');

class Schema {
  constructor(schemaDefinition) {
    this.validators = [];
    Object.entries(schemaDefinition).forEach(([key, value]) => {
      this.validators.push(new Validator(key, value));
    });
  }
  validate(obj) {
    const validatedObj = {};
    this.validators.forEach(validator => {
      validatedObj[validator.field] = validator.validate(obj);
    });
    return validatedObj;
  }
}

module.exports = {
  Schema
};
