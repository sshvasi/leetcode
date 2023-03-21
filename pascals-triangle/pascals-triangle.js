/**
 * Time: O(N^2) | Space: O(1)
 */
const generate = (numRows) => {
  const triangle = [[1]]

  for (let r = 1; r < numRows; r++) {
    const prevRow = triangle.at(r - 1)
    const currRow = Array(r + 1).fill(1)

    for (let c = 1; c < currRow.length - 1; c++) {
      currRow[c] = prevRow[c] + prevRow[c - 1]
    }

    triangle.push(currRow)
  }

  return triangle
}