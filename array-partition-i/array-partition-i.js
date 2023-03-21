/**
 * Сортировка + доп. память для неё.
 * 
 * Time: O(N * logN) | Space: O(N)
 */
const arrayPairSum = (nums) => {
  let maxSum = 0

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i += 2) {
    maxSum += nums[i]
  }

  return maxSum
}