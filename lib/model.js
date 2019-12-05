const uuid = require('uuid/v4');
const {
  mkdirp,
  writeJSON,
  readDirectoryJSON,
  readJSON
} = require('../lib/fsfuncs');

class Model {
  constructor(name, schema) {
    this.name = name;
    this.schema = schema;
    mkdirp(name);
  }
  create(obj) {
    const myUuid = uuid();
    const validatedObj = this.schema.validate(obj);
    return writeJSON(myUuid, validatedObj);
  }
  all() {
    return readDirectoryJSON(this.name);
  }
  findByID(id) {
    return readJSON(`${this.name}/${id}`);
  }
  findByIdAndUpdate(id, patch) {
    //TODO validate
    return updateJSON(`${this.name}/${id}`, patch);
  }
}

module.exports = {
  Model
};