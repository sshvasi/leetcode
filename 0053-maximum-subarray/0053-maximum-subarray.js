const maxSubArray = (nums) => {
  let maxSum = -Infinity;
  let curSum = 0;

  for (const num of nums) {
    curSum = Math.max(num, curSum + num);
    maxSum = Math.max(maxSum, curSum);
  }

  return maxSum;
};