const runningSum = (nums) => {
  const sums = [nums[0]]

  for (let i = 1; i < nums.length; i++) {
    sums[i] = sums[i - 1] + nums[i]
  }

  return sums
}