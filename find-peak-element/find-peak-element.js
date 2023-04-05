const findPeakElement = (nums) => {
  let left = -1
  let right = nums.length - 1

  while (right - left > 1) {
    const middle = left + Math.floor((right - left) / 2)

    if (isGreaterThanNext(nums, middle)) {
      right = middle
    } else {
      left = middle
    }
  }

  return right
}

const isGreaterThanNext = (nums, index) => {
  return index === nums.length - 1
    ? true
    : nums[index] > nums[index + 1]
}