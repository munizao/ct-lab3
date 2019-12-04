const {
  Validator
} = require('../lib/validator.js');

describe ('validator class module', () => {
  const nameValidator = new Validator('name', {
    type: String,
    required: true
  });

  const foodsValidator = new Validator('foods', {
    type: Array,
    required: true
  });

  const weightValidator = new Validator('weight', {
    type: Number,
    required: false
  });


  const goodDog = {
    name: 'spot',
    foods: ['corn', 'spinach'],
    weight: 30
  };
  
  const badDog = {
    name: 'arlo',
    foods: 30,
    weight: [1, 2, 3, 4]
  };

  const emptyDog = {
  };

  it('properly makes a validator', () => {
    expect(nameValidator.field).toEqual('name');
    expect(nameValidator.configuration).toEqual({
      type: String,
      required: true
    });
    expect(nameValidator.validate).toBeDefined();
  });

  it('properly validates', () => {
    expect(nameValidator.validate(goodDog)).toEqual('spot');
    expect(() => foodsValidator.validate(badDog)).toThrowErrorMatchingSnapshot();
    expect(() => nameValidator.validate(emptyDog)).toThrowErrorMatchingSnapshot();
    expect(weightValidator.validate(goodDog)).toEqual(30);
    expect(() => weightValidator.validate(badDog)).toThrowErrorMatchingSnapshot();
    expect(weightValidator.validate(emptyDog)).toEqual(undefined);
  });
});
