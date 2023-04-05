const searchRange = (nums, target) => {
  const first = getFirst(nums, target)
  const last = getLast(nums, target)
  return [first, last]
}

const getFirst = (nums, target) => {
  let low = -1
  let high = nums.length
  while (high - low > 1) {
    const middle = low + Math.floor((high - low) / 2)
    if (nums[middle] >= target) {
      high = middle
    } else {
      low = middle
    }
  }
  return nums[high] === target ? high : -1
}

const getLast = (nums, target) => {
  let low = -1
  let high = nums.length
  while (high - low > 1) {
    const middle = low + Math.floor((high - low) / 2)
    if (nums[middle] <= target) {
      low = middle
    } else {
      high = middle
    }
  }
  return nums[low] === target ? low : -1
}