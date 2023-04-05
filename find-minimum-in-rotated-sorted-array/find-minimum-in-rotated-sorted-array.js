const findMin = (nums) => {
  let left = -1
  let right = nums.length

  while (right - left > 1) {
    const middle = Math.floor(left + (right - left) / 2)

    if (nums[middle] <= nums[nums.length - 1]) {
      right = middle
    } else {
      left = middle
    }
  }

  return nums[right]
}