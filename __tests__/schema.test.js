const {
  Schema
} = require('../lib/schema.js');

describe ('schema class module', () => {
  const testSchemaDefinition =
  {
    name: {
      type: String,
      required: true
    }, 
    age: {
      type: Number,
      required: true
    },
    weight: {
      type: String
    }
  };

  const goodDog = {
    name: 'frodo',
    age: 12,
    weight: '10 lbs'
  };

  const badDog = {
    name: 'bilbo',
    age: [1, 2, 3, 4]
  };

  const castingDog = {
    name: '',
    age: '12',
    weight: '20 lbs'
  };

  const castedDog = {
    name: '',
    age: 12,
    weight: '20 lbs'
  };

  const testSchema = new Schema(testSchemaDefinition);

  it('properly makes a schema', () => {
    expect(testSchema.validators).toBeDefined();
  });
  it('correctly validates a schema', () => {
    expect(testSchema.validate(goodDog)).toEqual(goodDog);
    expect(testSchema.validate(castingDog)).toEqual(castedDog);
    expect(() => testSchema.validate(badDog)).toThrowErrorMatchingSnapshot();
  });

});
