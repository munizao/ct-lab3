import { write, writeFile } from 'fs';

class Model {
  constructor(name, schema) {
    this.name = name;
    this.schema = schema;
    makedirp(name);
  }
  create(obj) (
    #get uuid
    writeFile
  )
}