// Test case for calculateNumber function in 0-calcul.js
const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber SUM', () => {
  it('should return 4 for 1 and 3', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });

  it('should return 5 for 2.4 and 2.6', () => {
    expect(calculateNumber('SUM', 2.4, 2.6)).to.equal(5);
  });

  it('should return -2 for -1.4 and -0.6', () => {
    expect(calculateNumber('SUM', -1.4, -0.6)).to.equal(-2);
  });

  it('should return 6 for 6 and 0', () => {
    expect(calculateNumber('SUM', 6, 0)).to.equal(6);
  });
});

describe('calculateNumber SUBTRACT', () => {
  it('should return -2 for 1 and 3', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });

  it('should return -1 for 2.4 and 2.6', () => {
    expect(calculateNumber('SUBTRACT', 2.4, 2.6)).to.equal(-1);
  });

  it('should return 0 for -1.4 and -0.6', () => {
    expect(calculateNumber('SUBTRACT', -1.4, -0.6)).to.equal(0);
  });

  it('should return 6 for 6 and 0', () => {
    expect(calculateNumber('SUBTRACT', 6, 0)).to.equal(6);
  });
});

describe('calculateNumber DIVIDE', () => {
  it('should return a decimal for 1 and 3', () => {
    expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
  });

  it('should return a decimal for 2.4 and 2.6', () => {
    expect(calculateNumber('DIVIDE', 2.4, 2.6)).to.equal(0.6666666666666666);
  });

  it('should return 1 for -1.4 and -0.6', () => {
    expect(calculateNumber('DIVIDE', -1.4, -0.6)).to.equal(1);
  });

  it('should return "Error" for 6 and 0', () => {
    expect(calculateNumber('DIVIDE', 6, 0)).to.equal('Error');
  });
});

