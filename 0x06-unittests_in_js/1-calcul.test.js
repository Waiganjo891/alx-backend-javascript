// File: 1-calcul.test.js

const assert = require('assert');
const calculate = require('./1-calcul');

describe('calculate', () => {
    describe('SUM', () => {
        it('should return 6 when summing 2.4 and 3.5', () => {
            assert.strictEqual(calculate('SUM', 2.4, 3.5), 6);
        });
        it('should return 0 when summing -0.6 and 0.3', () => {
            assert.strictEqual(calculate('SUM', -0.6, 0.3), 0);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -1 when subtracting 2.4 and 3.5', () => {
            assert.strictEqual(calculate('SUBTRACT', 2.4, 3.5), -1);
        });
        it('should return 0 when subtracting 2.49 and 2.49', () => {
            assert.strictEqual(calculate('SUBTRACT', 2.49, 2.49), 0);
        });
    });

    describe('DIVIDE', () => {
        it('should return 2 when dividing 5.6 by 2.2', () => {
            assert.strictEqual(calculate('DIVIDE', 5.6, 2.2), 2);
        });
        it('should return "Error" when dividing by 0', () => {
            assert.strictEqual(calculate('DIVIDE', 5.6, 0), 'Error');
        });
        it('should return "Error" when dividing by a number rounded to 0', () => {
            assert.strictEqual(calculate('DIVIDE', 5.6, 0.49), 'Error');
        });
    });

    describe('Invalid type', () => {
        it('should return "Invalid operation type" when an unknown type is passed', () => {
            assert.strictEqual(calculate('MULTIPLY', 5, 2), 'Invalid operation type');
        });
    });
});
