const minSubArrayLen = (targetSum, nums) => {
  const { min } = Math

  let minLen = Infinity
  let sum = 0
  let left = 0

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]

    while (sum >= targetSum) {
      minLen = min(right - left + 1, minLen)

      sum -= nums[left]
      left++
    }
  }

  return minLen === Infinity ? 0 : minLen
};