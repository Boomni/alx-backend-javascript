// Test case for calculateNumber function in 0-calcul.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 for 1 and 3', () => {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4);
  });

  it('should return 5 for 2.4 and 2.6', () => {
    const result = calculateNumber(2.4, 2.6);
    assert.strictEqual(result, 5);
  });

  it('should return -2 for -1.4 and -0.6', () => {
    const result = calculateNumber(-1.4, -0.6);
    assert.strictEqual(result, -2);
  });

  it('should return 6 for 6 and 0', () => {
    const result = calculateNumber(6, 0);
    assert.strictEqual(result, 6);
  });

  it('should return 0 for 0 and 0', () => {
    const result = calculateNumber(0, 0);
    assert.strictEqual(result, 0);
  });

  it('should return 21 for 10 and 10.9', () => {
    const result = calculateNumber(10, 10.9);
    assert.strictEqual(result, 21);
  });
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('rounding down a and b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounding down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounding up b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounding up a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('rounding up a\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});

