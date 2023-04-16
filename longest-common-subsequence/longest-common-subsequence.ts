/**
 * Если символы равны,
 * смотрим следующие символы в обоих строках
 * и добавляем к предыдущему результату 1.
 * Иначе пробуем сдвигать указатели для обоих строк
 * и берём максимальное значение.
 * 
 * DP[i][j] = TEXT1[i] === TEXT2[j]
 *   ? DP[i+1][j+1] + 1
 *   : MAX(DP[i][j+1], DP[i+1][j])
 *
 * Для каждого символа в TEXT1
 * ищём подходящий символ в TEXT2.
 * Доп. память для массива.
 *
 * Time: O(N * M) | Space: O(N * M)
 */
function longestCommonSubsequence(text1: string, text2: string): number {
  const n = text1.length;
  const m = text2.length;
  // Добавляем дополнительную строку, заполненную нулями,
  // чтобы упростить вычисление.
  const dp = Array.from<number, number[]>(
    { length: n + 1 },
    () => Array.from<number>({ length: m + 1 }).fill(0)
  );

  for (let j = m - 1; j >= 0; j--) {
    for (let i = n - 1; i >= 0; i--) {
      dp[i][j] = text1[i] === text2[j]
        ? dp[i + 1][j + 1] + 1
        : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }

  return dp[0][0];
}
