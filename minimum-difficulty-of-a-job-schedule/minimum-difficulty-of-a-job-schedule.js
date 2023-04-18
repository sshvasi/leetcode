function minDifficulty(jobDifficulty, d) {
  const n = jobDifficulty.length;

  if (n < d) return -1;

  const dp = new Array(n).fill().map(() => new Array(d + 1).fill(Infinity));

  // В последний день минимальная возможная сложность — максимальная сложность среди оставшихся задач.
  // Перебираем все задачи и для каждого количества оставшихся задачи записываем максимум в последний день.
  dp[n - 1][d] = jobDifficulty[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    dp[i][d] = Math.max(dp[i + 1][d], jobDifficulty[i]);
  }

  // Перебираем все оставшиеся дни, с предпоследнего до первого.
  for (let day = d - 1; day >= 1; day--) {
    // day - 1 -> remaining days
    for (let i = day - 1; i < n - (d - day); i++) {
      let hardest = 0;

      for (let j = i; j < n - (d - day); j++) {
        hardest = Math.max(hardest, jobDifficulty[j]);
        dp[i][day] = Math.min(dp[i][day], hardest + dp[j + 1][day + 1]);
      }
    }
  }

  return dp[0][1];
}
