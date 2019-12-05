const {
  Model
} = require('../lib/model.js');

const {
  Schema
} = require('../lib/schema.js');

describe ('model class module', () => {
  const dogSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number
    },
    weight: {
      type: String
    }
  });
  
  const dogModel = new Model('Dog', dogSchema);

  it('constructs a model', () => {
    expect(dogModel.name).toEqual('Dog');
  }); 

});
