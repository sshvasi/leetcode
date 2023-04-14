/**
 * DP[i] = MAX(DP[i-1], DP[i-2] + SUM[i])
 * Time: O(N + K) | Space: O(N + K)
 */
function deleteAndEarn(nums: number[]): number {
  const points = new Map<number, number>();
  let maxNumber = 0;

  for (const num of nums) {
    points.set(num, (points.get(num) ?? 0) + num);
    maxNumber = Math.max(maxNumber, num);
  }

  const maxPoints = new Array(maxNumber + 1).fill(0);
  maxPoints[1] = points.get(1) ?? 0;

  for (let num = 2; num < maxPoints.length; num++) {
    const gain = points.get(num) ?? 0;
    maxPoints[num] = Math.max(maxPoints[num - 1], maxPoints[num - 2] + gain);
  }

  return maxPoints[maxNumber];
}
