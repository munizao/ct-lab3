const uuid = require('uuid/v4');
import { write, writeFile } from 'fs';

class Model {
  constructor(name, schema) {
    this.name = name;
    this.schema = schema;
    makedirp(name);
  }
  create(obj) {
    myUuid = uuid();
    validatedObj = this.schema.validate(obj);
    writeFile(uuid, validatedObj);
  }
}