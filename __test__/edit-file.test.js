

const validator = require('../validator.js');

describe('validate the type of data',()=>{
  it('is object',()=>{
    let input = {testing:'test'};

    expect(validator.isObject(input)).toBeTruthy();
  });
});