/**
 * Сортировка + перебор, не используется доп. память.
 *
 * Time: O(N * log(N)) | Space: O(1)
 */
const eraseOverlapIntervals = (intervals) => {
  let lastEnd = -Infinity
  let countToRemove = 0

  intervals.sort(([startA], [startB]) => startA - startB)

  for (const [start, end] of intervals) {
    if (start < lastEnd) {
      countToRemove++
      lastEnd = Math.min(lastEnd, end)
    } else {
      lastEnd = end
    }
  }

  return countToRemove
}