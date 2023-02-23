/**
 * Проходимся по всем элементам, не используем дополнительную память.
 *
 * Time: O(ROWS * COLS) | Space: O(1)
 */
const spiralOrder = (matrix) => {
  const elements = []

  let [left, right] = [0, matrix[0].length - 1]
  let [top, bottom] = [0, matrix.length - 1]

  // Если бы правую и нижнюю границу инициализировали длиной, а не последним индексом,
  // проверка не включала бы равенство.
  while (left <= right && top <= bottom) {
    for (let col = left; col <= right; col++) {
      elements.push(matrix[top][col])
    }
    top++

    for (let row = top; row <= bottom; row++) {
      elements.push(matrix[row][right])
    }
    right--

    // Если в матрице осталась только одна строка или один столбец,
    // после двух проходов она закончится,
    // и мы добавим лишний элемент, если не сделаем проверку.
    if (!(left <= right && top <= bottom)) break

    for (let col = right; col >= left; col--) {
      elements.push(matrix[bottom][col])
    }
    bottom--

    for (let row = bottom; row >= top; row--) {
      elements.push(matrix[row][left])
    }
    left++
  }

  return elements
}