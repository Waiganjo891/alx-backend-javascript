// File: 2-calcul_chai.test.js

const { expect } = require('chai');
const calculate = require('./2-calcul_chai');

describe('calculate', () => {
    describe('SUM', () => {
        it('should return 6 when summing 2.4 and 3.5', () => {
            expect(calculate('SUM', 2.4, 3.5)).to.equal(6);
        });
        it('should return 0 when summing -0.6 and 0.3', () => {
            expect(calculate('SUM', -0.6, 0.3)).to.equal(0);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -1 when subtracting 2.4 and 3.5', () => {
            expect(calculate('SUBTRACT', 2.4, 3.5)).to.equal(-1);
        });
        it('should return 0 when subtracting 2.49 and 2.49', () => {
            expect(calculate('SUBTRACT', 2.49, 2.49)).to.equal(0);
        });
    });

    describe('DIVIDE', () => {
        it('should return 2 when dividing 5.6 by 2.2', () => {
            expect(calculate('DIVIDE', 5.6, 2.2)).to.equal(2);
        });
        it('should return "Error" when dividing by 0', () => {
            expect(calculate('DIVIDE', 5.6, 0)).to.equal('Error');
        });
        it('should return "Error" when dividing by a number rounded to 0', () => {
            expect(calculate('DIVIDE', 5.6, 0.49)).to.equal('Error');
        });
    });

    describe('Invalid type', () => {
        it('should return "Invalid operation type" when an unknown type is passed', () => {
            expect(calculate('MULTIPLY', 5, 2)).to.equal('Invalid operation type');
        });
    });
});
