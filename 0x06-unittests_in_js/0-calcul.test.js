// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return 4 when inputs are 1.4 and 2.6', function () {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });
  it('should return 5 when inputs are 1.5 and 2.5', function () {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });
  it('should return 6 when inputs are 1.6 and 3.4', function () {
    assert.strictEqual(calculateNumber(1.6, 3.4), 6);
  });
  it('should return 0 when inputs are 0 and 0', function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
  it('should return -2 when inputs are -0.5 and -1.5', function () {
    assert.strictEqual(calculateNumber(-0.5, -1.5), -2);
  });
  it('should return 2 when inputs are 1.4 and 0.7', function () {
    assert.strictEqual(calculateNumber(1.4, 0.7), 2);
  });
  it('should return NaN if inputs are NaN', function () {
    assert.ok(isNaN(calculateNumber(NaN, NaN)));
  });
});
