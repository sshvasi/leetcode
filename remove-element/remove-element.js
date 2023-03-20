const removeElement = (nums, val) => {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }

    right++;
  }
  
  return left;
};