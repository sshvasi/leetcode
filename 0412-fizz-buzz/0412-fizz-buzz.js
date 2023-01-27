/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  const result = [];

  for (let i = 1; i <= n; i++) {
    const isFizz = i % 3 === 0;
    const isBuzz = i % 5 === 0;

    if (isFizz && isBuzz) {
      result.push('FizzBuzz');
    } else if (isFizz) {
      result.push('Fizz');
    } else if (isBuzz) {
      result.push('Buzz');
    } else {
      result.push(String(i));
    }
  }

  return result;
};