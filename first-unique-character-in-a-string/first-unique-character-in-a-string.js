/**
 * Перебор всех символов,
 * доп. память не нужна, потому алфавит конечен.
 * 
 * Time: O(N) | Space: O(1)
 */
const firstUniqChar = (str) => {
  const map = new Map()

  for (const char of str) {
    map.set(char, (map.get(char) ?? 0) + 1)
  }

  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) === 1) {
      return i
    }
  }

  return -1
}
