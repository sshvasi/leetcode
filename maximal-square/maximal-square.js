function maximalSquare(matrix) {
  const [n, m] = [matrix.length, matrix[0].length];
  const dp = Array(m + 1).fill(0);
  
  let maxSquareLen = 0;
  let prev = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const temp = dp[j];
      if (matrix[i - 1][j - 1] === '1') {
        dp[j] = Math.min(dp[j - 1], dp[j], prev) + 1;
        maxSquareLen = Math.max(maxSquareLen, dp[j]);
      } else {
        dp[j] = 0;
      }
      prev = temp;
    }
  }

  return maxSquareLen * maxSquareLen;
}