const twoSum = (nums, target) => {
  const numIdxMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i]
    const num2 = target - num1

    if (numIdxMap.has(num2)) {
      const j = numIdxMap.get(num2)
      return [i, j]
    }

    numIdxMap.set(num1, i)
  }
};