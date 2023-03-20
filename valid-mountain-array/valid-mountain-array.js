const validMountainArray = (nums) => {
  const n = nums.length;

  let i = 0;

  while (i < n - 1 && nums[i] < nums[i + 1]) {
    i++;
  }

  if (i === 0 || i === n - 1) {
    return false;
  }

  while (i < n - 1 && nums[i + 1] < nums[i]) {
    i++;
  }

  return i === n - 1;
};