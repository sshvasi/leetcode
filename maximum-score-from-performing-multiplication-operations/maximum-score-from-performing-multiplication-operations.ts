/**
 * DP[i] = MAX(
 *   MULT * NUMS[left] + DP[left + 1],
 *   MULT * NUMS[right] + DP[left]
 * )
 *
 * Time: O(M^2) | Space: O(M)
 */
function maximumScore(nums: number[], multipliers: number[]): number {
  const n = nums.length;
  const m = multipliers.length;
  const dp = new Array(m + 1).fill(0);

  for (let op = m - 1; op >= 0; op--) {
    for (let left = 0; left <= op; left++) {
      const mult = multipliers[op];
      const right = n - 1 - (op - left);

      dp[left] = Math.max(
        mult * nums[left] + dp[left + 1],
        mult * nums[right] + dp[left]
      );
    }
  }

  return dp[0];
}
