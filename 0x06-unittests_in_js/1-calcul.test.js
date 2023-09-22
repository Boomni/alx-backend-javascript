// Test case for calculateNumber function in 0-calcul.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber SUM', () => {
  it('should return 4 for 1 and 3', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });
  it('should return 5 for 2.4 and 2.6', () => {
    assert.strictEqual(calculateNumber('SUM', 2.4, 2.6), 5);
  });
  it('should return -2 for -1.4 and -0.6', () => {
    assert.strictEqual(calculateNumber('SUM', -1.4, -0.6), -2);
  });
  it('should return 6 for 6 and 0', () => {
    assert.strictEqual(calculateNumber('SUM', 6, 0), 6);
  });
});

describe('calculateNumber SUBTRACT', () => {
  it('should return -2 for 1 and 3', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
  });
  it('should return -1 for 2.4 and 2.6', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 2.4, 2.6), -1);
  });
  it('should return 0 for -1.4 and -0.6', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -0.6), 0);
  });
  it('should return 6 for 6 and 0', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 6, 0), 6);
  });
});

describe('calculateNumber DIVIDE', () => {
  it('should return a decimal for 1 and 3', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
  });
  it('should return a decimal for 2.4 and 2.6', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 2.4, 2.6), 0.6666666666666666);
  });
  it('should return 1 for -1.4 and -0.6', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -1.4, -0.6), 1);
  });
  it('should return 6 for 6 and 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 6, 0), 'Error');
  });
});
