const nextGreatestLetter = (letters, target) => {
  let left = -1
  let right = letters.length

  while (right - left > 1) {
    const middle = Math.floor(left + (right - left) / 2)

    if (letters[middle] > target) {
      right = middle
    } else {
      left = middle
    }
  }

  return letters[right % letters.length]
}