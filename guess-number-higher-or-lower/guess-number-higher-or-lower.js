const guessNumber = (n) => {
  let left = 1
  let right = n

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    const num = guess(mid)

    if (num === 0) {
      return mid
    }

    if (num < 0) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}