const findDuplicate = (nums) => {
  let slow = 0
  let fast = 0
  let start = 0

  while (true) {
    slow = nums[slow]
    fast = nums[nums[fast]]
    if (slow === fast) {
      while (start !== slow) {
        start = nums[start]
        slow = nums[slow]
      }
      return start
    }
  }
}