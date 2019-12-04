# LAB: Schemas

This is the second lab in a three day series about schema and schema
validation. For this lab, you'll use Jest to test a `Validator` class
and a `Schema` class.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

In the `starter_code` folder there is a completed version of yesterdays
lab. You can use the `starter_code` or use the code you worked on
yesterday. In either case, take a look at the `started_code` and compare
it to your code from yesterday.

## Requirements

**USE TDD Practices**

1. `Validator` class
2. `Schema` class

### Validator

The `Validator` class is used to validate and cast a single field in an object.

```js
const nameValidator = new Validator('name', {
  type: String,
  required: true
});

const ageValidator = new Validator('age', {
  type: String,
  required: true
});

const colorValidator = new Validator('color', {
  type: String,
  required: true
});

const dog = {
  name: 'spot',
  age: '5',
  weight: '20 lbs'
};

nameValidator.validate(dog) // returns 'spot'
age.validate(dog) // returns 5
colorValidator.validate(dog) // throws error
```

#### Testing

* Test that `validate` method can take an object and return a fields value
* Test that `validate` method can take an object and throw an error
* Test all permutations:
  * required and field missing
  * required and field there but wrong type
  * required and field there and right type
  * not required and field missing
  * not required and field there but wrong type
  * not required and field there and right type

#### Implementation

* `Validator` is initialize with two parameters: `field` and `configuration`
  * use your `getCaster` method from yesterdays lab to get the correct `castTo*` function
    based on `type` from the `configuration` parameter passed in
* `Validator` has a `validate` method that takes an object to validate
  * make sure the field is there if it is required
  * use the `castTo*` function to cast the field

### Schema

The `Schema` class is used to validate and cast an entire object.

```js
const schema = new Schema({
  dog: {
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
});

const spot = {
  name: 'spot',
  age: 5,
  weight: '20 lbs'
};

const rover = {
  name: 'rover',
  age: '10'
};

const who = {
  age: 'hi'
};

schema.validate(spot) // returns { name: 'spot', age: 5, weight: '20 lbs' }
schema.validate(rover) // returns { name: 'rover', age: 10 };'
schema.validate(who) // throws a errors about name being required and age not being a number
```

#### Testing

**Don't retest functionality already tested by your Validator tests**

* Test that `validate` method returns the object with all fields cast
* Test that `validate` method throws an error if the object doesn't follow the schema

#### Implementation

* `Schema` is initialized with an object defining a schema (`schemaDefinition`)
  * use the object to create an array of `Validator`s for each key/value in `schemaDefinition`
    and store the array in `this.validators`
`Schema` has a `validate` method that takes an object
  * invoke the `validate` method for each `Validator` in `this.validate`

## Rubric

* `Validator` - 5 points
* `Schema` - 5 points

---

## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations


