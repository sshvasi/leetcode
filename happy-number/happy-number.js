const isHappy = (n) => {
  let slow = n
  let fast = getNext(n)

  while (fast !== 1 && fast !== slow) {
    slow = getNext(slow)
    fast = getNext(getNext(fast))
  }

  return fast === 1
}

const getNext = (n) => {
  let totalSum = 0

  while (n > 0) {
    const lastDigit = n % 10
    n = Math.floor(n / 10)
    totalSum += lastDigit ** 2
  }

  return totalSum
}
