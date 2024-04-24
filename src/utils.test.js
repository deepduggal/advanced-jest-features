// import { multiply, isPrime } from './utils.js';
const { multiply, isPrime } = require('./utils');

describe('multiply', () => {
  it('n * 0 = 0', () => {
    expect(multiply(5, 0)).toBe(0);
    expect(multiply(999999.999999, 0)).toBe(0);
  });

  it('negative numbers', () => {
    expect(multiply(5, -2)).toBe(-10);
    expect(multiply(-5, -2)).toBe(10);
  });
});

describe('isPrime', () => {
  it('should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
  });

  it('should return false for non-prime numbers', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
  });

  it('should return false for negative numbers', () => {
    expect(isPrime(-2)).toBe(false);
    expect(isPrime(-3)).toBe(false);
    expect(isPrime(-5)).toBe(false);
    expect(isPrime(-7)).toBe(false);
    expect(isPrime(-11)).toBe(false);
  });
});