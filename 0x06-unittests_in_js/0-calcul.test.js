const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the sum of two rounded numbers', function() {
    assert.strictEqual(calculateNumber(1.4, 2.5), 4);
    assert.strictEqual(calculateNumber(1.6, 2.3), 4);
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
    assert.strictEqual(calculateNumber(-1.4, -2.5), -4);
    assert.strictEqual(calculateNumber(-1.6, -2.3), -4);
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });
  it('should handle zero correctly', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0.2, 0.2), 0);
  });
  it('should handle large numbers correctly', function() {
    assert.strictEqual(calculateNumber(1000.4, 2000.5), 3001);
  });
  it('should handle edge cases correctly', function() {
    assert.strictEqual(calculateNumber(0.9, 0.9), 2);
    assert.strictEqual(calculateNumber(-0.9, -0.9), -2);
  });
});
