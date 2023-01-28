const rotate = (nums, k) => {
  const n = nums.length
  const offset = k % n;
  reverse(nums, 0, n - 1);
  reverse(nums, 0, offset - 1);
  reverse(nums, offset, n - 1);
};

const reverse = (nums, start, end) => {
  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }
};

const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};