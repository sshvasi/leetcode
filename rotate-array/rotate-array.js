const rotate = (nums, k) => {
  const n = nums.length
  const offset = k % n
  reverse(nums, 0, n - 1)
  reverse(nums, 0, offset - 1)
  reverse(nums, offset, n - 1)
}

const reverse = (nums, i, j) => {
  while (i < j) {
    swap(nums, i, j)
    i++
    j--
  }
}

const swap = (nums, i, j) => {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}