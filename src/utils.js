function multiply(a, b) {
  return a * b;
}

/**
 * Check if a number is prime
 * @param {*} n 
 * @returns 
 */
function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  // Divide n by all numbers from 2 to sqrt(n)
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = { multiply, isPrime };