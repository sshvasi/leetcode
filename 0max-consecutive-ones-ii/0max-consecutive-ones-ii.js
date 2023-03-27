const findMaxConsecutiveOnes = (nums) => {
  let maxLength = 0
  let currOnes = 0
  let prevOnes = 0
  let zeroesNum = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroesNum = 1
      prevOnes = currOnes
      currOnes = 0
    } else {
      currOnes++
    }

    maxLength = Math.max(maxLength, currOnes + prevOnes + zeroesNum)
  }

  return maxLength
}